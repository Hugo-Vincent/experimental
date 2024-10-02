import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { BlockchainService } from './blockchain.service';
import { BlockDbService } from './db.service';
import { TxDto } from './dtos/tx.dto';
import { ExtendedInputDto } from './dtos/extended-input.dto';

@Injectable()
export class BtcBlockService implements OnApplicationBootstrap {


  constructor(
    private readonly httpService: HttpService,
    private readonly dbService: BlockDbService,
    private readonly blockchainService: BlockchainService,
  ) {}

  async onApplicationBootstrap(): Promise<any> {
    console.log('Running process');
    // Run only on first time:
    // await this.init();

    // await this.printKeys();
    // await this.printBlockCount();

    const blocksToProcess = 6;
    const lastStoredBlock = Number(await this.dbService.getMostRecentlyStoredBlockNr());
    const newestProcessedBlock = await this.startProcess(blocksToProcess);
    await this.sampleResult(lastStoredBlock + 1, newestProcessedBlock);
  }

  private async init(): Promise<void> {
    await this.dbService.storeMostRecentlyProcessedBlockNr(-1);
  }

  async startProcess(blocksToProcess: number): Promise<number> {
    const latestStoredBlock = Number(await this.dbService.getMostRecentlyStoredBlockNr());
    const lastBlockToProcess = latestStoredBlock + blocksToProcess;
    const firstNewBlockToProcess = latestStoredBlock + 1;
    for (let i = firstNewBlockToProcess; i <= lastBlockToProcess; i++) {
      const blockHash = await this.blockchainService.getBlockHash(i);
      const block = await this.blockchainService.getBlock(blockHash);
      const parsedTxs = block.tx.map((tx) => TxDto.fromRawBlockchainTx(tx, i));
      await Promise.all(parsedTxs.map((tx) => this.dbService.storeTx(tx)));
      await this.dbService.storeBlockHash(i, blockHash);
      await this.dbService.storeMostRecentlyProcessedBlockNr(i);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    console.log(`Stored ${blocksToProcess} new blocks, up until ${lastBlockToProcess}`);
    return lastBlockToProcess;
  }

  async getInputAddresses(txId: string): Promise<void> {
    const tx = await this.getTx(txId);
    const extendedInputs: ExtendedInputDto[] = [];
    for (const input of tx.i) {
      const inputOriginTx = await this.getTx(input.t);
      const originalOutput = inputOriginTx.o.find((o) => o.i === input.p);
      extendedInputs.push(new ExtendedInputDto(originalOutput.a, originalOutput.v));
    }
  }

  async sampleResult(startBlock: number, endBlock: number): Promise<void> {
    for (let i = startBlock; i <= endBlock; i++) {
      console.log(await this.dbService.getBlockHash(i));
      console.log()
    }
    console.log(await this.dbService.getTx('63522845d294ee9b0188ae5cac91bf389a0c3723f084ca1025e7d9cdfe481ce1'));

  }

  async printKeys(): Promise<void> {
    const keys = await this.dbService.getAllKeys();
    for (const key of keys) {
      console.log(key);
    }
  }

  async printBlockCount(): Promise<void> {
    console.log(await this.dbService.getMostRecentlyStoredBlockNr());
  }

  async getTx(txId: string): Promise<TxDto> {
    const dbTx = await this.dbService.getTx(txId);
    return TxDto.fromDbData(txId, dbTx);
  }
}
