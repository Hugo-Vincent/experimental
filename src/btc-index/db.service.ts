import { Injectable } from '@nestjs/common';
import { Level } from 'level';
import { TxDto } from './dtos/tx.dto';

@Injectable()
export class BlockDbService {
  private readonly blockCountKey: string;
  private readonly db: Level;

  constructor() {
    this.blockCountKey = 'blockCount';
    this.db = new Level('./db', { valueEncoding: 'json' });
  }

  async getMostRecentlyStoredBlockNr(): Promise<string> {
    return this.db.get(this.blockCountKey);
  }
  async storeMostRecentlyProcessedBlockNr(latestProcessedBlockNr: number): Promise<void> {
    return this.db.put(this.blockCountKey, String(latestProcessedBlockNr));
  }

  storeTx(parsedTx: TxDto): Promise<void> {
    const { t, ...rest } = parsedTx;
    return this.db.put(parsedTx.t, JSON.stringify(rest));
  }
  getTx(txId: string): Promise<string> {
    return this.db.get(txId);
  }

  storeBlockHash(blockNumber: number, blockHash: string): Promise<void> {
    return this.db.put(String(blockNumber), blockHash);
  }
  getBlockHash(blockNumber: number): Promise<string> {
    return this.db.get(String(blockNumber));
  }

  getAllKeys(): Promise<string[]> {
    return this.db.keys().all();
  }
}
