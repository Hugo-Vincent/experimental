/**
 * TxId is the key in the DB for this object.
 */
export interface IDbTx {
  n: string; // block number
  i: IDbInput[]; // inputs
  o: IDbOutput[]; // outputs
}
export interface IDbInput {
  p: string;   // prev vout index
  t: string | null;   // txid (undefined for minting txs)
}
export interface IDbOutput {
  v: string; // value
  a: string; // address
  i: string; // output index
}
