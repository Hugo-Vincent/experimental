export interface ITx {
  blockNumber: number; // block number
  inputs: ITxInput[]; // inputs
  outputs: ITxOutput[]; // outputs
}
export interface ITxInput {
  previousTxOutputIndex: number;   // prev vout index
  previousTxId: string | null;   // txid (undefined for minting txs)
}
export interface ITxOutput {
  valueBtc: number; // value
  address: string; // address
  outputIndex: number; // output index
}
