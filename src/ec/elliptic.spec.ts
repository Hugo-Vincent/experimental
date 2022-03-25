import { ec as EC } from 'elliptic';
import { entropyToMnemonic, mnemonicToEntropy } from 'bip39';
const shajs = require('sha.js');

const mnemonicToKey = mnemonic => {
  const entropy = mnemonicToEntropy(mnemonic);
  return ec.genKeyPair({ entropy });
};

const ec = new EC('p256');

const mnemonic = 'quality verify damage nominee dinner plunge bargain treat feel time rude skin sword fiscal welcome oppose enough palace fat matter view clerk illness exhaust';
const keyPair = mnemonicToKey(mnemonic);
console.log(keyPair.getPublic().encodeCompressed('hex'));

describe('Comparison between two signing functions', () => {
  const msgHex = '0123456789abcdefABCDEF';

  it('entropy to mnem and mnem to key', () => {
    const entropy = 'af3e54dc4af3e54dc4af3e54dc4af3e54dc4af3e54dc4af3e54dc4af3e54dc4a';
    const mnem = entropyToMnemonic(entropy);
    console.log(mnem);
    const entropy2 = mnemonicToEntropy(mnem);
    const keyPair = ec.genKeyPair({ entropy: entropy2 });
    console.log(keyPair.getPublic().encodeCompressed('hex'));
  });

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
    expect(signature).toBe('3046022100dfa08f167447f861eed4e61da8e996788b7cea601ce5cf9789c3be378781a56b022100fdbe055bc839f18077eef70da7659d9c02dac66244f579f50972fb35c642fdce');
  });
  it('Proposed sign', () => {
    const proposedSign = (msgHex, privateKey) => {
      const msgHash = shajs('sha256').update(msgHex, 'hex').digest('hex');
      return privateKey.sign(msgHash).toDER('hex');
    }
    const signature = proposedSign(msgHex, keyPair);
    expect(signature).toBe('304402202129fa530319f026534fb767eb315cbdf3e727e965e330456abcc3b2ad1f37bb022058ba41690ca4834574f619f5d0761efc7f9e16e5a9eae06da1a7655cff6ddeb9');
  });
});
describe('a', () => {
  it('', () => {
    const privateKey = '';
    const keyPair = ec.keyFromPrivate(privateKey);
    console.log(keyPair.getPublic().encodeCompressed('hex'));
  });
});
