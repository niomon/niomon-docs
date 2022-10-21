# Getting Started with WalletKit (NFT)

## Summary

WalletKit is a blockchain SDK that makes it easy for application to get data from chains and perform operations in a consistent interface. It abstracts the difference among different chains so your application can support multiple chains at the same time.

Here is an example of using WalletKit to fetch NFT information from Ethereum chain.

## Installation

To use WalletKit, an Alchemy API key is required. You can [obtain an API key from Alchemy](https://docs.alchemy.com/reference/using-the-alchemy-sdk#setting-up-the-alchemy-sdk) or you can use `demo` for testing purpose.

Install WalletKit via `npm` or `yarn` as a dependency:

```bash
yarn add walletkit
```

After installing the package, you can then import and use the SDK.

## Set up a data provider for NFT

To access chain data, first you need an instance of `DefaultAdapterFactory`, which is an entry point to access the NFT data provider.

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

You can then use the factory (`adapterFactory`) to access data providers for supported networks. For example this is to return NFT provider in Ethereum network and access its underlying APIs.

```tsx
// The network which NFTs are on.
const network = 'ethereum'

// Initialize the API provider for the network.
const nftProvider = factory.getNFTProvider(network)
```

## Fetching owned NFTs

Now it is available to access the APIs through the provider. The following example demonstrate how to get owned NFTs in different networks from an address using NFT provider.

```tsx
// The address which holds corresponding NFTs
const address = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045'
nftProvider.getOwnedNFTs(address).then(console.log)
```

This is the result of the above example (#1):

```json
{
	"ownedNfts":[
		{
			"contract":{
				"address":"0x000386e3f7559d9b6a2f5c46b4ad1a9587d59dc3"
			}
			"id":{...},
			"balance":"26",
			"title":"BoredApeNikeClub #1",
			"description":"COUNTDOWN OVER. MINTING LIVE. [https://nikeape.xyz](https://nikeape.xyz)"
			"tokenUri":{...},
			"media":[...],
			"metadata":{...},
			"timeLastUpdated":"2022-03-07T22:31:14.469Z",
			"contractMetadata":{...},
			"spamInfo":{...}
		}...
	]
}
```

You can access some data like title, description, image (from media field) etc. from the result. For the details of the returned result, check `getOwnedNFTs` in API reference.

It is also possible to query NFT collection data using the contract address:

```tsx
// Contract address for Azuki
const ensContractAddress = '0xED5AF388653567Af2F388E6224dC7C4b3241C544'
// Get collection data of the NFT
const collectionData = nftProvider.getNFTCollectionMetadata(
  // Using the network and contract address result from the response.
  'ethereum',
  ensContractAddress,
).then(console.log)
```

And the result is as follow (#2):

```json
{
	"address": "0xed5af388653567af2f388e6224dc7c4b3241c544",
	"logo": "https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s120",
	"name": "Azuki",
	"network": "ethereum",
	"verified": true
}
```

The following is the complete example of the above code blocks.

```tsx
import walletkit from 'walletkit'

// Optional cache manager, used to cache API result
const cacheManager = null

const factory = new DefaultAdapterFactory(
  alchemyAPIKey: 'demo', // Replace with your Alchemy API Key.
  null,
  cacheManager,
)

// Field to denote the network which NFTs are on.
const network = 'ethereum'

// Initialize the API provider for denoted network. In this case get the NFT provider.
const nftProvider = factory.getNFTProvider(network)

async function main() {
	// The address which holds corresponding NFTs
	const address = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045'
  const nfts = await nftProvider.getOwnedNFTs(address)
  console.log(nfts)
	// Check the above result block (#1)

	// Contract address for ENS (Ethereum Naming Service)
	const ensContractAddress = '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85'
  const collectionData = await nftProvider.getNFTCollectionMetadata(
	  // Using the network and contract address result from the response.
	  'ethereum',
	  ensContractAddress,
  )
	console.log(collectionData)
	// Check the above result block (#2)
}
```

Check API endpoints reference for the other APIs detail.

## Summary

This guide gives you the idea of how to establish a new instance of NFT provider and use the provider for corresponding NFTs feature. For more information on what the endpoints can do to help building your application, check the API endpoints reference.
