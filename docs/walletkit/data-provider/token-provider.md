---
sidebar_position: 1
---
# Token Metadata and Balance

## Introduction

One of the most common usage for the data provider is to get crypto token metadata and balance of a user, the following sections state some common use cases and demonstrate how to do so.

## Set up a data provider for token

To access token data, first you need an instance of `DefaultAdapterFactory`, which is an entry point to access the token data provider.

```tsx
import { DefaultAdapterFactory } from 'walletkit'

// Optional cache manager to cache API result. To use a in-memory cache for testing, pass a null here.
const cacheManager = null

const adapterFactory = new DefaultAdapterFactory(
  'demo', // Replace with your Alchemy API Key.
  null,
  cacheManager,
)
```

You can then use the factory (`adapterFactory`) to access data providers for supported networks. For example this is to return token provider in Ethereum network and access its underlying APIs.

Assume the factory is already established, you can use the factory to return token provider and access its underlying APIs, in this example, get the token provider from Ethereum network.

```tsx
// The network which token(Both native and contract token like ERC-20 or ERC-721) are on.
const network = 'ethereum'

// Initialize the API provider for the network.
const tokenProvider = adapterFactory.getTokenProvider(network)
```

You can read [Getting Started](../getting-started.md) on how to set up the adapter.

## Fetch metadata of a token

The contract of a token provides some metadata about the token. This information
includes token symbol and decimals. These information is required to present
token information to the user, otherwise it will only be a contract address and
a balance.

In addition to contract-provided metadata, the data provider also provides
a token icon for display.

To get token metadata, you need to have the contract address of the token.

```tsx title="Example 1: Getting metadata of USDT"
// Contract address of USDT on Ethereum mainnet
const contractAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7'
tokenProvider.getTokenMetadata(contractAddress).then(console.log)
```

This is the result of the above example:

```json title="Example Result 1: Getting metadata of USDT"
{
	"contractAddress": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
	"decimals": 6,
	"logo": "https://static.alchemyapi.io/images/assets/825.png",
	"name": "Tether",
	"network": "ethereum",
	"symbol": "USDT",
	"type": "contract"
}
```

Apart from ERC-20 token like USDT above, you can also get metadata of a NFT collection

```tsx title="Example 2: Getting metadata of an NFT"
// Contract address of Azuki
const nftAddress = '0xED5AF388653567Af2F388E6224dC7C4b3241C544'
tokenProvider.getTokenMetadata(nftAddress).then(console.log)
```

This is the result of the above example (#2)

```json title="Example Result 2: Getting metadata of an NFT"
{
	"contractAddress": "0xED5AF388653567Af2F388E6224dC7C4b3241C544", 
	"decimals": null,
	"logo": null,
	"name": "Azuki",
	"network": "ethereum",
	"symbol": "AZUKI",
	"type": "contract"
}
```

## Fetch token balance owned by a wallet

You can get balance ownwed by a wallet for two types of tokens: a Native Token
(like ETH) or a Contract Token (like USDT).

To get token balance owned by a wallet, you need to have the wallet address. For contract token like ERC-20, you also need the contract address of the token. The following code shows how to do that:

```tsx title="Example 3: Getting token balance owned by a wallet"
// The address you would like to get balance
const address = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045'

// For native token, for example Ethereum in its corresponding network
tokenProvider.getNativeTokenBalance(address).then(console.log)

// For contract token, for example USDT, you need to specific the address of the contract
const contractAddresses = ['0xdAC17F958D2ee523a2206206994597C13D831ec7']
tokenProvider.getContractTokenBalances(address, contractAddresses).then(console.log)
```

This is the result to get balance for native token:

```json title="Example Result 3: Getting token balance owned by a wallet"
// Balance of a native token
{
	"balance": "0x0f4240",
	"network": "ethereum",
	"type": "native"
}

// Balance of a contract token
{
	"balance": "0x0f4240",
	"contractAddress": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
	"network": "ethereum",
	"type": "contract"
}
```

For convenience, WalletKit provides `getTokenBalances` function which can get multiple token balance at once, by then you don’t need to get them one-by-one.

```tsx title="Example 4: Getting balance of mulitple tokens"
// Provide the list of tokens you would like to get
const tokens = [
	{
		"type": "native"
	},
	{
		"contractAddress": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
		"type": "contract"
	}
]

tokenProvider.getTokenBalances('0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045', tokens).then(console.log)
```

This is the result using the above API:

```json title="Example Result 4: Getting balance of mulitple tokens"
[{
	"balance": "0x0",
	"network": "ethereum",
	"type": "native"
}, {
	"balance": "0x0",
	"contractAddress": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
	"network": "ethereum",
	"type": "contract"
}]
```

## Display token balance in a numerical format

The balance of the previous result is in hexdecimal format, which is not what user expects, you can use `tokenBalanceValueUnsafe` utility function to do conversion to return numerical format.


:::caution

The function is called `tokenBalanceValueUnsafe` because the value of a token
cannot be displayed for very large or very small balance. In such situations the
function returns an error. Make sure you check the error and fallback to
a default string for display.

:::


```tsx title="Example 5: Showing numerical value of a token balance"
import { 
	tokenBalanceValueUnsafe,
	TokenBalance,
	TokenMetadata
 } from 'walletkit'

// Metadata and balance data of the token. They can be get from previous sections
const token = {
	"contractAddress": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
	"decimals": 6,
	"logo": "https://static.alchemyapi.io/images/assets/825.png",
	"name": "Tether",
	"network": "ethereum",
	"symbol": "USDT",
	"type": "contract",
	"balance": "0x0f4240"
} as TokenBalance & TokenMetadata

const value = tokenBalanceValueUnsafe(token)
console.log(value) // #6
// This returns numerical amount "1", which means 1 USDT token
```

## Complete example

The following is the complete example of the above code blocks.

```tsx title="Complete example for showing token metadata and value"
import { DefaultAdapterFactory } from 'walletkit'

// Set up the adapter for getting different features provider, check Getting Started for more details
const adapterFactory = new DefaultAdapterFactory(
  'demo', // Replace with your Alchemy API Key.
  null,
  null,
)

// The network which token(Both native and contract token like ERC-20 or ERC-721) are on.
const network = 'ethereum'

// Initialize the API provider for the network.
const tokenProvider = adapterFactory.getTokenProvider(network)

async function main() {
	// Contract address of USDT
	const contractAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7'
	const contractTokenMetadata = await tokenProvider.getTokenMetadata(contractAddress)
	console.log(contractTokenMetadata)
	// Check the above result block (#1)

	// Contract address of Azuki
	const nftAddress = '0xED5AF388653567Af2F388E6224dC7C4b3241C544'
	const nftContractMetadata = await tokenProvider.getTokenMetadata(nftAddress)
	console.log(nftContractMetadata)
	// Check the above result block (#2)

	// The address you would like to get balance
	const address = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045'
	
	// For native token, for example Ethereum in its corresponding network
	const nativeTokenBalance = await tokenProvider.getNativeTokenBalance(address)
	console.log(nativeTokenBalance)
	// Check the above result block (#3)
	
	// For contract token, for example USDT, you need to specific the address of the contract
	const contractAddresses = ['0xdAC17F958D2ee523a2206206994597C13D831ec7']
	const contractTokenBalances = await tokenProvider.getContractTokenBalances(address, contractAddresses)
	console.log(contractTokenBalances)
	// Check the above result block (#4)

	// Provide the list of tokens you would like to get
	const tokens = [{
		"type": "native"
	}, {
		"contractAddress": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
		"type": "contract"
	}]
	
	const balances = await tokenProvider.getTokenBalances('0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045', tokens)
	console.log(balances)
	// Check the above result block (#5)

	// Metadata and balance data of the token. They can be get from previous sections
	const token = {
		"contractAddress": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
		"decimals": 6,
		"logo": "https://static.alchemyapi.io/images/assets/825.png",
		"name": "Tether",
		"network": "ethereum",
		"symbol": "USDT",
		"type": "contract",
		"balance": "0x0f4240"
	} as TokenBalance & TokenMetadata
	
	const value = tokenBalanceValueUnsafe(token)
	console.log(value) // #6
	// This returns numerical amount "1", which means 1 USDT token
}

```

## Summary

This section gives you the idea of how to establish a new instance of token provider and provide examples on some common usage using underlying APIs. For more information on what the endpoints can do to help building your application, check the API endpoints reference.
