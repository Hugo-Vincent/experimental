import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { BtcBlockService } from './btc-block.service';
import { BlockDbService } from './db.service';
import { BlockchainService } from './blockchain.service';

@Module({
  imports: [HttpModule],
  providers: [BtcBlockService, BlockDbService, BlockchainService],
  exports: [BtcBlockService],
})
export class BtcBlockModule {}
