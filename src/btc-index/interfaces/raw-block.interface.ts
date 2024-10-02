import { IRawBlockTx } from './blockchain-tx-format.interface';

/**
 * Some blocks are empty:
 * https://mempool.space/block/00000000000000000002b4bbde290796f4dc4a4c2ddb46d0acd2ee8155b8b3f7
 *
 * They will only contain the miner minting tx.
 */
export interface IRawBlock {
  hash: string;
  tx: IRawBlockTx[];
}
