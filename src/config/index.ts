export const DOMAIN_BASE_CONFIG = {
  name: 'AtherlabsMultiSig',
  version: '1.0.0',
}

export const EIP712_NONCE_TYPES = {
  Nonce: [{ name: 'nonce', type: 'uint256' }],
}

export const EIP712_OFFCHAIN_TRANSACTION_TYPES = {
  OffChainTransaction: [
    { name: 'to', type: 'address' },
    { name: 'value', type: 'uint256' },
    { name: 'data', type: 'bytes' },
    { name: 'nonce', type: 'uint256' },
  ],
}
