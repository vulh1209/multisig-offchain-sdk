<p align="center">
    <a href="https://atherlabs.com/" target="blank">
        <img src="https://atherlabs.com/web/public/images/logos/logo.png" width="120" alt="Atherlab" />
    </a>
</p>
<p align="center" style="font-size: 16px; font-weight: 700">
    <a href="https://atherlabs.com" target="_blank">Atherlabs multisig off-chain SDK</a> is a SDK to sign off-chain multisig transaction
</p>

---

## Structure

| Codebase          | Description |
| ----------------  | ----------- |
| [core](src/core)  | SDK         |
| [types](src/types)| types       |
| [config](src/config)| constants   |

---

## Tech stack

<table>
    <tr>
        <td valign="top">
            <img valign="bottom" style="margin-right: 8px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png" width="24" alt="Loyalty Dashboard" />
                <a href="https://www.typescriptlang.org/" target="_blank">Typescript</a>
            </td>
        <td valign="bottom">Strongly typed programming language that builds on JavaScript</td>
    </tr>
    <tr>
        <td valign="top">
            <img valign="bottom" style="margin-right: 8px" src="https://docs.ethers.io/v6/static/logo.svg" width="24" alt="ethers.js" />
                <a href="https://docs.ethers.io/v6/static/logo.svg" target="_blank">Ethers.js</a>
            </td>
        <td valign="bottom">The ethers.js library aims to be a complete and compact library for interacting with the Ethereum Blockchain and its ecosystem. It was originally designed for use with ethers.io and has since expanded into a more general-purpose library.</td>
    </tr>
    <tr>
        <td valign="top">
            <img valign="bottom" style="margin-right: 8px" src="https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg" width="24" alt="EIP712" />
                <a href="https://eips.ethereum.org/EIPS/eip-712" target="_blank">Sign & recover address with IEP712</a>
            </td>
        <td valign="bottom">A procedure for hashing and signing of typed structured data as opposed to just bytestrings.</td>
    </tr>
</table>

---

## Scripts

- yarn add multisig-offchain-sdk

---

## How to use

<table>
    <tr>
        <td>const sdk = new MultiSigOffChainSDK(address: HexString,chainId: BigInt)</td>
        <td>init SDK</td>
    </tr>
    <tr>
        <td>sdk.signCancelTxNonce(wallet: Wallet,nonce: BigInt) : Promise<string> </td>
        <td>sign cancel transaction nonce</td>
    </tr>
    <tr>
        <td>sdk.signOffChainTransaction(wallet: Wallet,tx: OffChainTransaction) : Promise<string> </td>
        <td>sign offchain transaction</td>
    </tr>

</table>

---

## Branches

<table>
    <tr>
        <td><code>main</code></td>
        <td>Production branch. Code on this branch will be built and deployed to production website</td>
    </tr>
     <tr>
        <td><code>develop</code></td>
        <td>Development branch. Code on this branch will be built and deploy to development lib. New code should be pushed to this branch for testing, then merged to main.</td>
    </tr>
</table>
