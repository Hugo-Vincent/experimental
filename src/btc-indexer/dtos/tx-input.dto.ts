import { ITxInput } from '../interfaces/readable-tx-format.interface';
import { IDbInput } from '../interfaces/db-tx-format.interface';
import { IVin } from '../interfaces/blockchain-tx-format.interface';

export class TxInputDto implements ITxInput {
  readonly previousTxId: string;
  readonly previousTxOutputIndex: number;

  constructor(previousTxId: string, previousTxOutputIndex?: number) {
    this.previousTxId = previousTxId;
    this.previousTxOutputIndex = previousTxOutputIndex;
  }

  static fromDbData(dbInput: IDbInput): TxInputDto {
    return new TxInputDto(dbInput.t, Number(dbInput.p));
  }

  static fromBlockchainData(blockchainInput: IVin): TxInputDto {
    return new TxInputDto(blockchainInput.txid ?? 'mint', blockchainInput.vout);
  }
}
