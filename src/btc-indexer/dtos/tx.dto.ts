import { IRawBlockTx, IVin, IVout } from '../interfaces/blockchain-tx-format.interface';
import { ITx, ITxInput, ITxOutput } from '../interfaces/readable-tx-format.interface';
import { IDbTx } from '../interfaces/db-tx-format.interface';
import { TxInputDto } from './tx-input.dto';
import { TxOutputDto } from './tx-output.dto';

export class TxDto implements ITx {
  blockNumber: number;
  txId: string;
  inputs: ITxInput[];
  outputs: ITxOutput[];

  constructor(blockNr: number, rawTxId: string, inputs: ITxInput[], outputs: ITxOutput[]) {
    this.blockNumber = blockNr;
    this.txId = rawTxId;
    this.inputs = inputs;
    this.outputs = outputs;
  }

  static fromRawBlockchainTx(rawTx: IRawBlockTx, blockNr: number): TxDto {
    return new TxDto(
      blockNr,
      rawTx.txid,
      rawTx.vin.map((input) => TxInputDto.fromBlockchainData(input)),
      rawTx.vout.map((output, i) => TxOutputDto.fromBlockchainData(output, i)),
    );
  }

  static fromDbData(txId: string, dbJsonTx: string): TxDto {
    const parsedDbTx: IDbTx = JSON.parse(dbJsonTx);
    return new TxDto(
      Number(parsedDbTx.n),
      txId,
      parsedDbTx.i.map((i) => TxInputDto.fromDbData(i)),
      parsedDbTx.o.map((o) => TxOutputDto.fromDbData(o)),
    );
  }

  toDbStorageFormat(): string {
    const storageFormat: IDbTx = {
      n: String(this.blockNumber),
      i: this.inputs.map((input) => {
        if (input.previousTxId === 'mint') {
          return { t: input.previousTxId };
        } else {
          return { t: input.previousTxId, p: String(input.previousTxOutputIndex) };
        }
      }),
      o: this.outputs.map((output) => ({ a: output.address, i: String(output.outputIndex), v: String(output.valueBtc) })),
    }
    return JSON.stringify(storageFormat);
  }

  private static parseBlockchainInputs(ins: IVin[]): ITxInput[] {
    const inputs: ITxInput[] = [];
    for (const vin of ins) {
      inputs.push({ previousTxOutputIndex: vin.vout, previousTxId: vin.txid ?? null });
    }
    return inputs;
  }

  private static parseBlockchainOutputs(outs: IVout[]): ITxOutput[] {
    const outputs: ITxOutput[] = [];
    let i = 0;
    for (const vout of outs) {
      if (vout.value === 0) {
        outputs.push({ valueBtc: 0, address: null, outputIndex: i });
      } else {
        outputs.push({
          valueBtc: vout.value,
          address: vout.scriptPubKey.type === 'pubkey'
            ? vout.scriptPubKey.asm.split(' ')[0]
            : vout.scriptPubKey.address,
          outputIndex: i,
        });
      }
      i++;
    }
    return outputs;
  }
}
