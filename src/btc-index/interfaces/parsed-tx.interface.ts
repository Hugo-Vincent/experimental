export interface IParsedTx {
  t: string; // txId
  i: (IParsedInputMiner | IParsedInputUser)[];
  o: IParsedOutput[];
}
interface IParsedInputMiner {
  b: string;
}
interface IParsedInputUser {
  p: number;   // prev vout
  t: string;   // txid
}
interface IParsedOutput {
  v: number; // value
  a: string; // address
  i: number;
}
