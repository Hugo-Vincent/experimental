import { IDbOutput } from '../interfaces/db-tx-format.interface';
import { ITxOutput } from '../interfaces/readable-tx-format.interface';

export class TxOutputDto implements ITxOutput {
  address: string;
  outputIndex: number;
  valueBtc: number;

  constructor(address: string, outputIndex: number, valueBtc: number) {
    this.address = address;
    this.outputIndex = outputIndex;
    this.valueBtc = valueBtc;
  }

  static fromDbData(dbOutput: IDbOutput): TxOutputDto {
    return new TxOutputDto(dbOutput.a, Number(dbOutput.i), Number(dbOutput.v));
  }
}
