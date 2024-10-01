import { Injectable } from '@nestjs/common';
import { Level } from 'level';
import { IParsedTx } from './interfaces/parsed-tx.interface';

@Injectable()
export class BlockDbService {
  private readonly blockCountKey: string;
  private readonly db: Level;

  constructor() {
    this.blockCountKey = 'blockCount';
    this.db = new Level('./db', { valueEncoding: 'json' });
  }

  storeTx(parsedBlock: IParsedTx): Promise<void> {
    return this.db.put(parsedBlock.t, JSON.stringify(parsedBlock));
  }

  async getMostRecentlyStoredBlock(): Promise<number> {
    return Number(await this.db.get(this.blockCountKey));
  }

  storeBlockHash(blockNumber: number, blockHash: string): Promise<void> {
    return this.db.put(blockNumber.toString(), blockHash);
  }
}
