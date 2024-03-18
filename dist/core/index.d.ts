import { Wallet } from 'ethers';
import { Domain, Nonce, OffChainTransaction } from 'src/types';
export declare class MultiSigOffChainSDK {
    domain: Domain;
    constructor(address: string, chain: BigInt);
    signCancelTxNonce(wallet: Wallet, nonce: Nonce): Promise<string>;
    signOffChainTransaction(wallet: Wallet, tx: OffChainTransaction): Promise<string>;
}
