import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, map, Observable } from 'rxjs';
import { Level } from 'level';
import { IParsedTx } from './interfaces/parsed-tx.interface';
import { BlockDbService } from './db.service';

/**
 * Some blocks are empty:
 * https://mempool.space/block/00000000000000000002b4bbde290796f4dc4a4c2ddb46d0acd2ee8155b8b3f7
 *
 * They will only contain the miner minting tx.
 */
interface IBlock {
  hash: string;
  tx: IBlockTx[];
}
interface IBlockTx {
  txId: string;
  vin: IVin[];
  vout: IVout[];
}
interface IVin {
  txid: string;
  vout: number;
}
interface IVout {
  value: number; // btc;
  scriptPubkey: {
    asm: string;
    address?: string;
    type: string;
  }
}
interface IRpcResponse<T> {
  result: T;
  error: {
    code: string;
    message: string;
  };
}

@Injectable()
export class BtcBlockService {
  private readonly quickNodeURL: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly dbService: BlockDbService,
  ) {
    this.quickNodeURL = 'https://rough-smart-butterfly.btc.quiknode.pro/5625f53d0a8df4a461c3df387635324c80cfecf3/';
  }

  async onApplicationBootstrap(): Promise<any> {
    const result = await this.getBlockHash(700000);
    console.log(result);
    const result2 = await this.getBlock(result);
    console.log(result2.tx[0]);
    console.log(result2.tx[0].vin);
    console.log(result2.tx[0].vout);

    const db = new Level('./db', { valueEncoding: 'json' });

    const value = await db.get('aap');
    console.log(value);
  }

  async startProcess(blocksToProcess: number): Promise<void> {
    const latestStoredBlock = await this.dbService.getMostRecentlyStoredBlock();

    for (let i = latestStoredBlock; i < blocksToProcess; i++) {

    }
  }

  async storeBlock(block: IBlock): Promise<void> {

    const parsedTxs = block.tx.map((tx) => this.parseTx(tx, block.hash));
    await Promise.all(parsedTxs.map((tx) => this.dbService.storeTx(tx)));
  }

  getBlockHash(blockNumber: number): Promise<string> {
    return this.post<string>('getblockhash', this.quickNodeURL, [blockNumber], true);
  }
  getBlock(blockHash: string): Promise<IBlock> {
    return this.post<IBlock>('getblock', this.quickNodeURL, [blockHash, 2], true);
  }

  private parseTx(tx: IBlockTx, blockHash: string): IParsedTx {
    return {
      i: this.parseInputs(tx.vin, blockHash),
      o: this.parseOutputs(tx.vout),
      t: tx.txId,
    };
  }

  private parseInputs(ins: IVin[], blockHash: string): IParsedTx['i'] {
    const inputs: IParsedTx['i'] = [];
    for (const vin of ins) {
      if (!vin.txid) {
        // miner minting tx
        inputs.push({ b: blockHash });
      } else {
        inputs.push({ p: vin.vout, t: vin.txid });
      }
    }
    return inputs;
  }

  private parseOutputs(outs: IVout[]): IParsedTx['o'] {
    const outputs: IParsedTx['o'] = [];
    let i = 0;
    for (const vout of outs) {
      if (vout.value === 0) {
        outputs.push({ v: 0, a: null, i });
      } else {
        outputs.push({
          v: vout.value,
          a: vout.scriptPubkey.type === 'pubkey'
            ? vout.scriptPubkey.asm.split(' ')[0]
            : vout.scriptPubkey.address,
          i,
        });
      }
      i++;
    }
    return outputs;
  }

  private async post<T>(method: string, endpoint: string, params?: unknown, rpc = true): Promise<T> {
    try {
      if (!rpc) {
        return await firstValueFrom(this._post<T>(method, endpoint, params));
      }
      return await firstValueFrom(
        this._post<IRpcResponse<T>>(method, endpoint, params).pipe(
          map((x: IRpcResponse<T>) => {
            if (x.error) {
              throw new Error(`Error for ${method} -> ${x.error.code}: ${x.error.message}`);
            }
            return x.result;
          }),
        ),
      );
    } catch (e) {
      console.log(e);
    }
  }

  private _post<T>(method: string, endpoint: string, params?: unknown): Observable<T> {
    const headers = method === '' ? { 'x-qn-api-version': '1' } : {};
    return this.httpService
      .post<T>(endpoint, { jsonrpc: '2.0', id: 1, method, params, headers })
      .pipe(map((x) => x.data));
  }
}

