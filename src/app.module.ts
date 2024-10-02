import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BtcBlockModule } from './btc-indexer/btc-block.module';

@Module({
  imports: [BtcBlockModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
