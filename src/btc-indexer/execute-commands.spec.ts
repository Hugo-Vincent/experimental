import { Test, TestingModule } from '@nestjs/testing';
import { BtcBlockIndexerService } from './btc-block-indexer.service';
import { BtcBlockModule } from './btc-block.module';
import { BlockDbService } from './db.service';

describe('execute cmds', () => {
  let btcBlockService: BtcBlockIndexerService;
  let dbService: BlockDbService;

  beforeEach(async () => {
    const testAppModule: TestingModule = await Test.createTestingModule({
      imports: [BtcBlockModule],
    }).compile();
    btcBlockService = testAppModule.get<BtcBlockIndexerService>(BtcBlockIndexerService);
    dbService = testAppModule.get<BlockDbService>(BlockDbService);
  });

  describe('cmds', () => {
    it('fetches values', async () => {
      for (const val of (await dbService.getTxDbValues())) {
        console.log(val);
      }
    });
  });
});
