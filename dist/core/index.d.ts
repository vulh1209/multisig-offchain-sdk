import { Wallet } from 'ethers';
import { Domain, OffChainTransaction } from 'src/types';
export declare class MultiSigOffChainSDK {
    domain: Domain;
    constructor(address: string, chain: bigint);
    signCancelTxNonce(wallet: Wallet, nonce: bigint): Promise<string>;
    signOffChainTransaction(wallet: Wallet, tx: OffChainTransaction): Promise<string>;
}
