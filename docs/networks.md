# Supported Networks

export const Supported = () => <span class="badge badge--success">supported</span>

export const Unsupported = () => <span class="badge badge--danger">unsupported</span>

export const Provider = () => <span class="badge badge--info">provider</span>

export const Deprecated = () => <span class="badge badge--secondary">deprecated</span>

export const Q4 = () => <span class="badge badge--secondary">Q4'22</span>

This table lists Niomon's current feature availability for each of its supported chains.

| Network          | Description                             | Auth               | Wallet Kit    | Ditto           |
|------------------|-----------------------------------------|--------------------|---------------|-----------------|
| ethereum         | Ethereum mainnet                        | <Supported />️      | <Supported />️ | <Supported />️   |
| sepolia          | Ethereum Sepolia testnet                | <Supported /> [^1] | <Supported /> | <Supported />   |
| goerli           | Ethereum Goerli testnet                 | <Supported /> [^1] | <Supported /> | <Supported />   |
| ropsten          | Ethereum Ropsten testnet <Deprecated /> | <Supported /> [^1] | <Supported /> | <Unsupported /> |
| rinkeby          | Ethereum Rinkeby testnet <Deprecated /> | <Supported /> [^1] | <Supported /> | <Unsupported /> |
| polygon          | Polygon mainnet                         | <Supported /> [^1] | <Supported /> | <Supported />   |
| mumbai           | Polygon Mumbai testnet                  | <Supported /> [^1] | <Supported /> | <Supported />   |
| bsc              | Binance Smart Chain mainnet             | <Supported /> [^1] | <Supported /> | <Supported />   |
| bsc-testnet      | Binance Smart Chain testnet             | <Supported /> [^1] | <Supported /> | <Supported />   |
| arbitrum         | Arbitrum (Ethereum L2) mainnet          | <Supported /> [^1] | <Provider />  | <Q4 />          |
| arbitrum-rinkeby | Arbitrum (Ethereum L2) Rinkeby testnet  | <Supported /> [^1] | <Provider />  | <Q4 />          |
| optimism         | Optimism (Ethereum L2) mainnet          | <Supported /> [^1] | <Provider />  | <Q4 />          |
| optimism-kovan   | Optimism (Ethereum L2) Kovan testnet    | <Supported /> [^1] | <Provider />  | <Q4 />          |
| zksync2-testnet  | zkSync V2 testnet                       | <Unsupported />    | <Q4 />        | <Q4 />          |
| immutable        | Immutable X                             | <Unsupported />    | <Q4 />        | <Q4 />          |
| solana           | Solana mainnet                          | <Q4 />             | <Q4 />        | <Q4 />          |
| solana-testnet   | Solana testnet                          | <Q4 /> [^2]        | <Q4 />        | <Q4 />          |
| cosmos-sdk       | Cosmos SDK based chains                 | <Unsupported />    | <Provider />  | <Unsupported /> |

[^1]: Use Ethereum identity for authentication.
[^2]: Use Solana identity for authentication.