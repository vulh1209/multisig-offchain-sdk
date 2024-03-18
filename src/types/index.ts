import { AddressLike } from 'ethers'
import { DataHexString } from 'ethers/lib.commonjs/utils/data'

export interface Domain {
  name: string
  version: string
  verifyingContract: string
  chainId: string
}

export interface Nonce {
  nonce: BigInt
}

export interface OffChainTransaction {
  nonce: BigInt
  data: DataHexString
  value: BigInt
  to: AddressLike
}
