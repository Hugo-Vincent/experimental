import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom, map, Observable } from 'rxjs';
import { IRawBlock } from './interfaces/raw-block.interface';

interface IRpcResponse<T> {
  result: T;
  error: {
    code: string;
    message: string;
  };
}

@Injectable()
export class BlockchainService {
  private readonly quickNodeURL: string;

  constructor(private readonly httpService: HttpService) {
    this.quickNodeURL = 'https://rough-smart-butterfly.btc.quiknode.pro/5625f53d0a8df4a461c3df387635324c80cfecf3/';
  }

  getBlockHash(blockNumber: number): Promise<string> {
    return this.post<string>('getblockhash', this.quickNodeURL, [blockNumber], true);
  }
  getBlock(blockHash: string): Promise<IRawBlock> {
    return this.post<IRawBlock>('getblock', this.quickNodeURL, [blockHash, 2], true);
  }

  private async post<T>(method: string, endpoint: string, params?: unknown, rpc = true): Promise<T> {
    try {
      if (!rpc) {
        return await firstValueFrom(this._post<T>(method, endpoint, params));
      }
      return await firstValueFrom(
        this._post<IRpcResponse<T>>(method, endpoint, params).pipe(
          map((x: IRpcResponse<T>) => {
            if (x.error) {
              throw new Error(`Error for ${method} -> ${x.error.code}: ${x.error.message}`);
            }
            return x.result;
          }),
        ),
      );
    } catch (e) {
      console.log(e);
    }
  }

  private _post<T>(method: string, endpoint: string, params?: unknown): Observable<T> {
    const headers = method === '' ? { 'x-qn-api-version': '1' } : {};
    return this.httpService
      .post<T>(endpoint, { jsonrpc: '2.0', id: 1, method, params, headers })
      .pipe(map((x) => x.data));
  }
}