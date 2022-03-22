// import { validateMnemonic, mnemonicToEntropy, generateMnemonic } from 'bip39';
// import { ec as EC } from 'elliptic';
// import * as shajs from 'sha.js';
//
// export const signTxs = (mnemonic, txs) => {
//     if (!validateMnemonic(mnemonic)) {
//         return;
//     }
//     const key = mnemonicToKey(mnemonic);
//     return Promise.all(txs.map(challenges => Promise.all(challenges.map(challenge => signTx(challenge, key)))));
// };
//
// export const generateKeyPair = () => {
//     const mnemonic = generateMnemonic(256);
//     const key = mnemonicToKey(mnemonic);
//     const publicKey = key.getPublic().encodeCompressed('hex');
//     return { mnemonic, publicKey };
// };
//
// const signTx = (msgHex, privateKey) => {
//     const msgHash = shajs('sha256').update(msgHex).digest('hex');
//     const msgHashArray = Array.from(new Uint8Array(msgHash));
//     return privateKey.sign(msgHashArray).toDER('hex');
// };
//
// const mnemonicToKey = mnemonic => {
//     const entropy = mnemonicToEntropy(mnemonic);
//     const ec = new EC('p256');
//     return ec.genKeyPair({ entropy });
// };
