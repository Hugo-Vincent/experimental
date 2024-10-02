import { Level } from 'level';

export abstract class DbService {
  protected blockCountKey = 'blockCount';
  constructor(protected db: Level) {}

  async getLastBlockNr(): Promise<string> {
    try {
      return await this.db.get(this.blockCountKey);
    } catch (e) {
      return '-1';
    }
  }
  async storeLastBlockNr(latestProcessedBlockNr: number): Promise<void> {
    return this.db.put(this.blockCountKey, String(latestProcessedBlockNr));
  }

  getKeys(): Promise<string[]> {
    return this.db.keys().all();
  }
  getValues(): Promise<string[]> {
    return this.db.values().all();
  }
}
