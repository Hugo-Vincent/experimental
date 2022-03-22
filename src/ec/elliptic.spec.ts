import { ec as EC } from 'elliptic';
import { mnemonicToEntropy } from 'bip39';
const shajs = require('sha.js');

const mnemonicToKey = mnemonic => {
  const entropy = mnemonicToEntropy(mnemonic);
  return ec.genKeyPair({ entropy });
};

const ec = new EC('p256');

const mnemonic = '';
const keyPair = mnemonicToKey(mnemonic);
console.log(keyPair.getPublic().encodeCompressed('hex'));

describe('Comparison between two signing functions', () => {
  const msgHex = '0123456789abcdefABCDEF';

  it('Current sign', () => {
    const currentSign = (msgHex, privateKey) => {
      // [
      //   '0', '1', '2', '3', '4',
      //   '5', '6', '7', '8', '9',
      //   'a', 'b', 'c', 'd', 'e',
      //   'f', 'A', 'B', 'C', 'D',
      //   'E', 'F']
      const msgArray: number[] = Array.from(msgHex);

      // Uint8Array(22) [
      //   0, 1, 2, 3, 4, 5, 6,
      //     7, 8, 9, 0, 0, 0, 0,
      //     0, 0, 0, 0, 0, 0, 0,
      //     0]
      // Hexadecimal characters are interpreted as 0 values
      const msgBuffer = new Uint8Array(msgArray);

      const msgHash = shajs('sha256').update(msgBuffer).digest();
      console.log(msgHash);
      // Uint8Array(32) [
      //   74, 215, 205,  38,  95, 243,  34, 106,
      //     233,   5,   4,  33,  63,  38, 202,  53,
      //     201, 202,  21,  25, 222,  58, 205, 197,
      //     223, 181, 102, 129, 130, 216,  91, 192
      //   ]
      const msgHashArray = new Uint8Array(msgHash);
      return privateKey.sign(msgHashArray).toDER('hex');
    }
    const signature = currentSign(msgHex, keyPair);
    expect(signature).toBe('3045022100a373585f00e59c9ec82718a265debe80728555b69ea8c6bcf124fa74c2dc9170022074f97aec7d8f7eef415a0e6e834e9b2314a4d94d3c45749ef7f4b43eb3017285');
  });
  it('Proposed sign', () => {
    const proposedSign = (msgHex, privateKey) => {
      const msgHash = shajs('sha256').update(msgHex, 'hex').digest('hex');
      return privateKey.sign(msgHash).toDER('hex');
    }
    const signature = proposedSign(msgHex, keyPair);
    expect(signature).toBe('3044022004c05177250cfadfdddcac14bc6130e686524fd7a2293f3dd5083b1aadf1321d0220008c2752778a348ee253d4bf82854c76593be2c30d1c8b61426cfce964aba25e');
  });
});
describe('a', () => {
  it('', () => {
    const privateKey = '';
    const keyPair = ec.keyFromPrivate(privateKey);
    console.log(keyPair.getPublic().encodeCompressed('hex'));
  });
});
