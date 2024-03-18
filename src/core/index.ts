import { Wallet, recoverAddress } from 'ethers'
import { DOMAIN_BASE_CONFIG, EIP712_NONCE_TYPES, EIP712_OFFCHAIN_TRANSACTION_TYPES } from 'src/config'
import { Domain, Nonce, OffChainTransaction } from 'src/types'

export class MultiSigOffChainSDK {
  domain: Domain

  constructor(address: string, chain: BigInt) {
    this.domain = {
      ...DOMAIN_BASE_CONFIG,
      verifyingContract: address,
      chainId: chain.toString(),
    }
  }

  public async signCancelTxNonce(wallet: Wallet, nonce: BigInt) {
    return wallet.signTypedData(this.domain, EIP712_NONCE_TYPES, { nonce })
  }

  public async signOffChainTransaction(wallet: Wallet, tx: OffChainTransaction) {
    return wallet.signTypedData(this.domain, EIP712_OFFCHAIN_TRANSACTION_TYPES, { ...tx })
  }
}
