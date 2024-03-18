import { Wallet } from 'ethers';
import { Domain, OffChainTransaction } from 'src/types';
export declare class MultiSigOffChainSDK {
    domain: Domain;
    constructor(address: string, chain: BigInt);
    signCancelTxNonce(wallet: Wallet, nonce: BigInt): Promise<string>;
    signOffChainTransaction(wallet: Wallet, tx: OffChainTransaction): Promise<string>;
}
