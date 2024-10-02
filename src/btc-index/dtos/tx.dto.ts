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
    const inputs = this.parseBlockchainInputs(rawTx.vin);
    const outputs = this.parseBlockchainOutputs(rawTx.vout);
    return new TxDto(blockNr, rawTx.txid, inputs, outputs);
  }

  static fromDbData(txId: string, dbTx: string): TxDto {
    const parsedDbTx: IDbTx = JSON.parse(dbTx);
    return new TxDto(
      Number(parsedDbTx.n),
      txId,
      parsedDbTx.i.map((i) => TxInputDto.fromDbData(i)),
      parsedDbTx.o.map((o) => TxOutputDto.fromDbData(o))
    );
  }

  toStorageFormat(): string {
    return
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
