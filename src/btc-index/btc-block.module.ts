import { Module } from '@nestjs/common';
import { BtcBlockService } from './btc-block.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [BtcBlockService],
  exports: [BtcBlockService],
})
export class BtcBlockModule {}
