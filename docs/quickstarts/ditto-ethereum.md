# Connecting Ditto with your Ethereum dApps

## Step 1: Create a Niomon Developer Account

import ClosedBeta from '@site/src/components/ClosedBeta';

<ClosedBeta />

1. Sign in with your email address at https://admin.niomon.io.
2. Register a new tenant.
3. From the Ditto tab in Niomon Admin Console, create a new Application.
4. Copy your Ditto Application's `appId`.

## Step 2: Install Niomon JS SDK

### Using NPM
```
npm install --save @niomon/niomon-js
```

### Using Yarn

```
yarn add @niomon/niomon-js
```

## Step 3: Set up Ditto Ethereum Provider

```js
import {ditto} from "@niomon/niomon-js";

const dittoProvider = new ditto.EthereumProvider({
  appId: "appId",
  network: "ethereum",
  infuraId: "infuraId",
});

// Trigger sign in flow
await provider.enable();
```

## Step 4: Using Ditto Ethereum Provider

Ditto Ethereum Provider is compatible with [web3.js](https://github.com/ChainSafe/web3.js) and
[ethers.js](https://github.com/ethers-io/ethers.js/).

### web3.js

```js
import Web3 from "web3";

const web3 = new Web3(dittoProvider);

// Get addresses
const addresses = await web3.eth.getAccounts();
```

### ethers.js

```js
import { ethers } from "ethers";

const provider = new ethers.providers.Web3Provider(dittoProvider);
const signer = provider.getSigner();

// Get addresses
const address = await signer.getAddress();
```

## Next Steps

🔥 Well done! Your users can now sign in with Ditto using email addresses, and create crypto wallets
without dealing with seed phrases.

To learn more, check out:

📖 [Niomon SDK for Web API Reference](/docs/apis/niomon-js)