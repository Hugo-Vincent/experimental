import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { BlockchainService } from './blockchain.service';
import { TxDto } from './dtos/tx.dto';
import { ExtendedInputDto } from './dtos/extended-input.dto';
import { BlockHashesDbService } from './db-services/block-hashes-db.service';
import { BlockTxsDbService } from './db-services/block-txs-db.service';
import { IRawBlock } from './interfaces/raw-block.interface';

@Injectable()
export class BtcBlockIndexerService implements OnApplicationBootstrap {
  readonly fnMap: Record<string | number, () => Promise<any>> = {
    [1]: this.startBlockTxStorageProcess.bind(this),
    [2]: this.startBlockHashStorageProcess.bind(this),
    [3]: this.testingMethods.bind(this),
    [4]: this.getBlock.bind(this),
  };


  constructor(
    private readonly httpService: HttpService,
    private readonly blockchainService: BlockchainService,
    private readonly blockTxsDbService: BlockTxsDbService,
    private readonly blockHashesDbService: BlockHashesDbService,
  ) {}

  async onApplicationBootstrap(): Promise<any> {
    const option: number = 4;
    await this.fnMap[option]();
  }


  async testingMethods(): Promise<any> {
    // await this.printKeys();
    await this.printBlockCount();
    for (const val of (await this.blockTxsDbService.getValues())) {
      console.log(val);
    }
    for (const val of (await this.blockHashesDbService.getValues())) {
      console.log(val);
    }

    // console.log(JSON.stringify(await this.blockchainService.getBlock('000000001a5c4531f86aa874e711e1882038336e2610f70ce750cdd690c57a81')));
    // const lastStoredBlock = Number(await this.dbService.getMostRecentlyStoredBlockNr());
    // await this.sampleResult(0, 5);

    // console.log(await this.getInputAddressesOfTx('f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16'));
  }

  async getBlock(): Promise<void> {
    const blockHash = await this.blockchainService.getBlockHash(800000);
    const block = await this.blockchainService.getBlock(blockHash);
    console.log(JSON.stringify(block));
  }

  private async startBlockTxStorageProcess(): Promise<void> {
    console.log('Running block tx storage');
    const blocksToProcess = 431;
    await this.processBlockTxs(blocksToProcess);
  }

private async startBlockHashStorageProcess(): Promise<void> {
  console.log('Running block hash storage');
  const blocksToProcess = 431;
  await this.storeBlockHashes(blocksToProcess);
}

  async processBlockTxs(blocksToProcess: number): Promise<number> {
    const latestStoredBlock = Number(await this.blockTxsDbService.getLastBlockNr());
    const lastBlockToProcess = latestStoredBlock + blocksToProcess;
    const firstNewBlockToProcess = latestStoredBlock + 1;
    for (let i = firstNewBlockToProcess; i <= lastBlockToProcess; i++) {
      console.log('Processing block ' + i);
      const blockHash = await this.blockHashesDbService.getBlockHash(i);
      const block = await this.blockchainService.getBlock(blockHash);
      const parsedTxs = block.tx.map((tx) => TxDto.fromRawBlockchainTx(tx, i));
      await Promise.all(parsedTxs.map((tx) => this.blockTxsDbService.storeTx(tx)));
      await this.blockTxsDbService.storeLastBlockNr(i);
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
    console.log(`Stored ${blocksToProcess} new blocks, up until ${lastBlockToProcess}`);
    return lastBlockToProcess;
  }

  async storeBlockHashes(blocksToProcess: number): Promise<void> {
    const latestStoredBlock = Number(await this.blockHashesDbService.getLastBlockNr());
    const lastBlockToProcess = latestStoredBlock + blocksToProcess;
    const firstNewBlockToProcess = latestStoredBlock + 1;
    console.log('Starting at block: ' + firstNewBlockToProcess);
    for (let i = firstNewBlockToProcess; i <= lastBlockToProcess; i++) {
      console.log('Processing block ' + i);
      const blockHash = await this.blockchainService.getBlockHash(i);
      await this.blockHashesDbService.storeBlockHash(i, blockHash);
      await new Promise((resolve) => setTimeout(resolve, 250));
      if (i % 50 === 0) {
        await this.blockHashesDbService.storeLastBlockNr(i);
      }
    }
  }

  async getInputAddressesOfTx(txId: string): Promise<ExtendedInputDto[]> {
    const tx = await this.getTx(txId);
    const extendedInputs: ExtendedInputDto[] = [];
    for (const input of tx.inputs) {
      if (!input.previousTxId) {
        extendedInputs.push(new ExtendedInputDto('minting_input', 0));
        continue;
      }
      const inputOriginTx = await this.getTx(input.previousTxId);
      const originalOutput = inputOriginTx.outputs.find((o) => o.outputIndex === input.previousTxOutputIndex);
      extendedInputs.push(new ExtendedInputDto(originalOutput.address, originalOutput.valueBtc));
    }
    return extendedInputs;
  }

  async sampleResult(startBlock: number, endBlock: number): Promise<void> {
    // for (let i = startBlock; i <= endBlock; i++) {
    //   console.log(await this.dbService.getBlockHash(i));
    // }
    const keys = await this.blockTxsDbService.getKeys();
    for (const key of keys) {
      if (key.length === 64) {
        console.log(await this.blockTxsDbService.getTx(key));
      }
    }
  }

  async printKeys(): Promise<void> {
    const keys = await this.blockTxsDbService.getKeys();
    for (const key of keys) {
      console.log(key);
    }
  }

  async printBlockCount(): Promise<void> {
    console.log(await this.blockTxsDbService.getLastBlockNr());
  }

  async getTx(txId: string): Promise<TxDto> {
    const dbTx = await this.blockTxsDbService.getTx(txId);
    return TxDto.fromDbData(txId, dbTx);
  }
}
