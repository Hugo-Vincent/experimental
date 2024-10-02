import { Injectable } from '@nestjs/common';
import { Level } from 'level';
import { DbService } from './db.service';
import { TxDto } from '../dtos/tx.dto';

@Injectable()
export class BlockTxsDbService extends DbService {
  constructor() {
    super(new Level('./src/btc-indexer/dbs/tx-db', { valueEncoding: 'json' }));
  }

  storeTx(parsedTx: TxDto): Promise<void> {
    return this.db.put(parsedTx.txId, parsedTx.toDbStorageFormat());
  }
  getTx(txId: string): Promise<string> {
    return this.db.get(txId);
  }
}
