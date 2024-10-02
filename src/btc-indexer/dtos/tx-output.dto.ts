import { IDbOutput } from '../interfaces/db-tx-format.interface';
import { ITxOutput } from '../interfaces/readable-tx-format.interface';
import { IVout } from '../interfaces/blockchain-tx-format.interface';

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

  static fromBlockchainData(blockchainOutput: IVout, outputIndex: number): TxOutputDto {
    if (blockchainOutput.value === 0) {
     return new TxOutputDto(null, outputIndex, 0);
    } else {
      const walletData = blockchainOutput.scriptPubKey;
      return new TxOutputDto(
        walletData.type === 'pubkey' ? walletData.asm.split(' ')[0] : walletData.address,
        outputIndex,
        blockchainOutput.value,
      );
    }
  }
}
