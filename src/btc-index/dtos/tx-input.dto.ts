import { ITxInput } from '../interfaces/readable-tx-format.interface';
import { IDbInput } from '../interfaces/db-tx-format.interface';

export class TxInputDto implements ITxInput {
  previousTxId: string | null;
  previousTxOutputIndex: number;

  constructor(previousTxId: string | null, previousTxOutputIndex: number) {
    this.previousTxId = previousTxId;
    this.previousTxOutputIndex = previousTxOutputIndex;
  }

  static fromDbData(dbInput: IDbInput): TxInputDto {
    return new TxInputDto(dbInput.t, Number(dbInput.p));
  }
}
