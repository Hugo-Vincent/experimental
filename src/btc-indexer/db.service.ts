import { Injectable } from '@nestjs/common';
import { Level } from 'level';
import { TxDto } from './dtos/tx.dto';

@Injectable()
export class BlockDbService {
  private readonly blockCountKey: string;
  private readonly txDb: Level;
  private readonly blockDb: Level;

  constructor() {
    this.blockCountKey = 'blockCount';
    this.txDb = new Level('./src/btc-indexer/dbs/tx-db', { valueEncoding: 'json' });
    this.blockDb = new Level('./src/btc-indexer/dbs/blockhash-db', { valueEncoding: 'json' });
  }

  async getLastBlockTxsNr(): Promise<string> {
    try {
      return await this.txDb.get(this.blockCountKey);
    } catch (e) {
      return '-1';
    }
  }
  async storeLatestBlockTxsNr(latestProcessedBlockNr: number): Promise<void> {
    return this.txDb.put(this.blockCountKey, String(latestProcessedBlockNr));
  }

  async getLastBlockHashesNr(): Promise<string> {
    try {
      return await this.blockDb.get(this.blockCountKey);
    } catch (e) {
      return '-1';
    }
  }
  async storeLatestBlockHashesNr(latestProcessedBlockNr: number): Promise<void> {
    return this.blockDb.put(this.blockCountKey, String(latestProcessedBlockNr));
  }

  storeTx(parsedTx: TxDto): Promise<void> {
    return this.txDb.put(parsedTx.txId, parsedTx.toDbStorageFormat());
  }
  getTx(txId: string): Promise<string> {
    return this.txDb.get(txId);
  }

  storeBlockHash(blockNumber: number, blockHash: string): Promise<void> {
    return this.blockDb.put(String(blockNumber), blockHash);
  }
  getBlockHash(blockNumber: number): Promise<string> {
    return this.blockDb.get(String(blockNumber));
  }

  getTxDbKeys(): Promise<string[]> {
    return this.txDb.keys().all();
  }
  getTxDbValues(): Promise<string[]> {
    return this.txDb.values().all();
  }
  getBlockDbKeys(): Promise<string[]> {
    return this.blockDb.keys().all();
  }
  getBlockDbValues(): Promise<string[]> {
    return this.blockDb.values().all();
  }
}
