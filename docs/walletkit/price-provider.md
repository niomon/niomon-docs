# Price provider

## Introduction

As a medium of exchange in digital form, it is crucial to have price information for crypto under the market, the following sections state how to get the such information, it also features an example on getting a fiat amount with respect to token balance.

## Set up a data provider for token price

Assume the factory is already established, you can use the factory to return token price provider and access its underlying APIs, in this example, get the token price provider from Ethereum network.

```tsx
// The network which token(Both native and contract token like ERC-20 or ERC-721) are on.
const network = 'ethereum'

// Initialize the API provider for the network.
const tokenProvider = adapterFactory.getPriceProivder(network)
```

You can read Getting Started note on how to set up the adapter.

## Fetch exchange rate of a token

There are two APIs to fetch exchange rate of a token, one is for native token and one is for contract token list ERC-20.

To get exchange rate of a native token, you just need to specify the fiat currency you would like to return, for example if you need both USD and JPY price for Ethereum token

```tsx
tokenProvider.getNativeTokenPrice(['usd', 'jpy']).then(console.log)
```

This is the result returned: (#1)

```json
{
	"type": "native",
	"network": "ethereum",
	"prices": {
		"usd": 1586.35,
		"jpy": 234553
	}
}
```

To get exchange rate of a contract token, you also need the address of the contract token you would like to return, for example if you need both USD and JPY price for USDT token

```tsx
// Contract address of USDT
const usdtContractAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7'
tokenProvider.getContractTokenPrice([usdtContractAddress], ['usd', 'jpy']).then(console.log)
```

This is the result returned: (#2)

```json
[{
	"type": "contract",
	"contractAddress": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
	"network": "ethereum",
	"prices": {
		"jpy": 147.92,
		"usd": 1.001
	}
}]
```

`walletkit` also provides a unified API to get both types of tokens at once, all you need is to specific the type explicitly.

```tsx
// Denote to have both native token and USDT token
const tokens = [{
	type: 'native' // This denotes to get native token
}, {
	type: 'contract', // This denotes to get contract token
	contractAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7'
}]

tokenProvider.getTokenPrices(tokens, ['usd', 'jpy']).then(console.log)
```

This is the result returned:

```tsx
[
	{
		"type": "native",
		"network": "ethereum",
		"prices": {
			"usd": 1586.35,
			"jpy": 234553
		}
	},
	{
		"type": "contract",
		"contractAddress": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
		"network": "ethereum",
		"prices": {
			"jpy": 147.92,
			"usd": 1.001
		}
	}
]
```

## Show the fiat amount of the user’s balance

One of the common scenario for getting the fiat amount of a token is to show the corresponding user’s balance. This section demonstrate how this can be done.

To show the fiat amount, it requires user’s balance of the token to calculate the fiat amount, the information can be get from token provider, you can refer to “Fetch token balance of a user” in token provider section if necessary.

The following gives an example from that: (#3)

```tsx
{
	"balance": "0x0f4240",
	"contractAddress": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
	"network": "ethereum",
	"type": "contract"
}
```

By merging the balance result with the price result from previous section, you now have enough information to calculate the fiat amount.

`walletkit` provides extra formatter to format crypto-related information based on `@formatjs/intl` . You can refer to util section for more detail. For this part, it shows how to create the intl object and use the underlying formatter to return the fiat amount of the user’s balance.

```tsx
// The token object includes balance and price information
// The price information
const token = {
	balance: '0x0f4240',
	contractAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
	network: 'ethereum',
	type: 'contract',
	prices: {
		// Exchange rate for the fiat currency. Corresponding currency is requried for formatting option.
		// In this case the format option supports 'JPY' and 'USD' value.
		jpy: 147.92,
		usd: 1.001
	}
}

// Optionally create cache to prevent memory leak
const cache = createIntlCache()
// Create the intl object includes different formatters
const intl = createIntl({
		locale: 'en-US' // Set the locale of the formatter
	}),
	cache
)

// Use the underlying formatter to return the fiat amount of the token
// Provide no options to use default formatting. By default it calcuated based on USD price without further formatting
const simpleValue = intl.formatTokenValue(token)
console.log(simpleValue) // Returns "1.001" based on USD price

// Provide options for formatting. It is requires to denote the style in currency to show the currency sign
// Set the currency for the corresponding amount, the same currency value is required to be in "prices" object in the token
const valueWithSign = intl.formatTokenValue(token, {style: 'currency', currency: 'JPY'})
console.log(valueWithSign) // Returns "¥147.92" which is a JPY price
```

## Summary

The following is the complete example of the above code blocks, this also includes using token provider to get token information.

```tsx
// The network which token(Both native and contract token like ERC-20 or ERC-721) are on.
const network = 'ethereum'

// Initialize the API provider for the network.
const priceProvider = adapterFactory.getPriceProivder(network)

async function main() {
	const nativeTokenPrices = await priceProvider.getNativeTokenPrice(['usd', 'jpy'])
	console.log(nativeTokenPrices)
	// Check the above result block (#1)

	// Contract address of USDT
	const usdtContractAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7'
	const usdtTokenPrices = await priceProvider.getContractTokenPrice([usdtContractAddress], ['usd', 'jpy'])
	console.log(usdtTokenPrices)
	// Check the above result block (#2)

	// To show the fiat amount of the user balance, it is required to have token information
	const tokenProvider = adapterFactory.getTokenProvider(network)

	//
	// For contract token, for example USDT, you need to specific the address of the contract
	const contractAddresses = ['0xdAC17F958D2ee523a2206206994597C13D831ec7']
	const contractTokenBalances = await tokenProvider.getContractTokenBalances(address, contractAddresses)
	console.log(contractTokenBalances)
	// Check the above result block (#3)

	// This object includes all the information required to calcuate fiat amount of the balance.
	const tokenInfo = {
		prices: usdtTokenPrices[0].prices,
		...contractTokenBalances
	}
	/**
	 * The following section create the intl object and use the underlying format API to return the balance value.
	 **/
	// Optionally create cache to prevent memory leak
	const cache = createIntlCache()
	// Create the intl object includes different formatters
	const intl = createIntl({
			locale: 'en-US' // Set the locale of the formatter
		}),
		cache
	)
	
	// Use the underlying formatter to return the fiat amount of the token
	// Provide no options to use default formatting. By default it calcuated based on USD price without further formatting
	const simpleValue = intl.formatTokenValue(tokenInfo)
	console.log(simpleValue) // Returns "1.001" based on USD price

	// Provide options for formatting. It is requires to denote the style in currency to show the currency sign
	// Set the currency for the corresponding amount, the same currency value is required to be in "prices" object in the token
	const valueWithSign = intl.formatTokenValue(token, {style: 'currency', currency: 'JPY'})
	console.log(valueWithSign) // Returns "¥147.92" which is a JPY price
}
```

This section gives you the idea of how to establish a new instance of price provider and provide examples on some common usage using underlying APIs and related formatter from util. For more information on what the endpoints can do to help building your application, check the API endpoints reference.
