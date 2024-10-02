import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { BtcBlockIndexerService } from './btc-block-indexer.service';
import { BlockchainService } from './blockchain.service';
import { BlockHashesDbService } from './db-services/block-hashes-db.service';
import { BlockTxsDbService } from './db-services/block-txs-db.service';

@Module({
  imports: [HttpModule],
  providers: [BtcBlockIndexerService, BlockHashesDbService, BlockTxsDbService, BlockchainService],
  exports: [BtcBlockIndexerService],
})
export class BtcBlockModule {}
