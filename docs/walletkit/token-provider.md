# Docs about fetching token data and balance

- Fetching token data and balance
    - how to fetch metadata of a token
    - how to fetch token balance of a user
    - how to display token balance in a numerical format (i.e. bignum hex to real number)
    - example, for now, each section need at least one

Fetching token data and balance example

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

You can read Getting Started note on how to set up the adapter.

## Fetch metadata of a token

To get token metadata, you need to have the contract address of the token.

```tsx
// Contract address of USDT
const contractAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7'
tokenProvider.getTokenMetadata(contractAddress).then(console.log)
```

This is the result of the above example (#1)

```json
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

```tsx
// Contract address of Azuki
const nftAddress = '0xED5AF388653567Af2F388E6224dC7C4b3241C544'
tokenProvider.getTokenMetadata(nftAddress).then(console.log)
```

This is the result of the above example (#2)

```json
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

## Fetch token balance of a user

To get token balance of a user, you need to have a wallet address. For contract token like ERC-20, you also need to get its contract address. The following shows how to do that.

```tsx
// The address you would like to get balance
const address = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045'

// For native token, for example Ethereum in its corresponding network
tokenProvider.getNativeTokenBalance(address).then(console.log)

// For contract token, for example USDT, you need to specific the address of the contract
const contractAddresses = ['0xdAC17F958D2ee523a2206206994597C13D831ec7']
tokenProvider.getContractTokenBalances(address, contractAddresses).then(console.log)
```

This is the case to get balance for native token (#3)

```json
{
	"balance": "0x0f4240",
	"network": "ethereum",
	"type": "native"
}
```

This is the case to get balance for contract token (#4)

```tsx
{
	"balance": "0x0f4240",
	"contractAddress": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
	"network": "ethereum",
	"type": "contract"
}
```

For convenience, `walletkit` provides using `getTokenBalances` function which can get multiple token balance at once, by then you don’t need to get them one-by-one.

```tsx
// Provide the list of tokens you would like to get
const tokens = [{
	"type": "native"
}, {
	"contractAddress": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
	"type": "contract"
}]

tokenProvider.getTokenBalances('0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045', tokens).then(console.log)
```

This is the result using the above API (#5)

```json
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

The balance of the previous result is in hexdecimal format, which is not what common user expects, you can use `tokenBalanceValueUnsafe` util function to do conversion to return numerical format.

```tsx
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

The following is the complete example of the above code blocks.

```tsx
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
