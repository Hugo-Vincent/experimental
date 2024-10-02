export interface IRawBlockTx {
  txid: string;
  vin: IVin[];
  vout: IVout[];
}
export interface IVin {
  txid: string | null; // Minting tx has no prev txid
  vout: number;
}
export interface IVout {
  value: number; // btc units;
  scriptPubKey: {
    asm: string;
    address?: string;
    type: string;
  }
}
