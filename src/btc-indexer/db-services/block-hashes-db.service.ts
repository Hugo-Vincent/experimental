import { Injectable } from '@nestjs/common';
import { Level } from 'level';
import { DbService } from './db.service';

@Injectable()
export class BlockHashesDbService extends DbService {
  constructor() {
    super(new Level('./src/btc-indexer/dbs/blockhash-db', { valueEncoding: 'json' }));
  }

  storeBlockHash(blockNumber: number, blockHash: string): Promise<void> {
    return this.db.put(String(blockNumber), blockHash);
  }
  getBlockHash(blockNumber: number): Promise<string> {
    return this.db.get(String(blockNumber));
  }
}
