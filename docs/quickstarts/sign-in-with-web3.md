# Add Web3 login to your app

Niomon Auth supports using [Sign-in with Ethereum](/docs/auth/siwe) protocol to authenticate users
with Ethereum accounts and ENS profiles. This document is a step-by-step guide to integrating
Niomon Auth with a Single-Page App.

## OpenID Connect (OIDC)

OpenID Connect or OIDC is an identity protocol that is now widely adopted by many identity
providers on the Internet. Niomon's OIDC integrates allow you to set up wallet-based sign-in with
existing applications that support OIDC (or via third-party libraries) with no code written. This
is the fastest and simplest way to integrate with Niomon Auth which is perfect for testing and
prototyping.

Learn more: [OpenID Connect](/docs/auth/oidc)

## Step 1: Create a Niomon Developer Account

import ClosedBeta from '@site/src/components/ClosedBeta';

<ClosedBeta />

1. Sign in with your email address at https://admin.niomon.io.
2. Register a new tenant.

## Step 2: Configure an application

1. From the Auth tab in Niomon Admin Console, create a new Client.
2. Configure Callback URLs. If you are following along with our sample project, set this to
`http://localhost:3000`.

## Step 3: Install Niomon JS SDK

### Using NPM
```
npm install --save @niomon/niomon-js
```

### Using Yarn

```
yarn add @niomon/niomon-js
```

## Step 4: Add login flow to your application

```js

import { NiomonClient } from 'niomon-js';

const niomon = new NiomonClient({
  clientId: "YOUR_CLIENT_ID",
  baseURL: "https://api.niomonid.com/YOUR_TENANT",
  redirectURI: window.location.origin
});
niomon.loginWithRedirect();
```

## Step 5: Handle callback from Niomon

Niomon redirects back to your application after the authentication process. Your application should
call the `handleAuthCallback()` function to handle the callback. One way to do this is to only call
`handleAuthCallback()` when `state` and `code` query parameters are detected.

```js
if (location.search.includes("state=") &&
    (location.search.includes("code=") ||
    location.search.includes("error="))) {
  await niomon.handleAuthCallback();
}
```

## Step 6: Getting user information

After logging in, you may want to display the logged-in user's name or profile picture. Niomon SDK provides the `getUser()` function to retrieve user information.

```js
const user = await niomon.getUser():
```

## Next Steps

🔥 Well done! Your application can now sign in users using email addresses or Ethereum wallets, and
retrieves user profile information.

To learn more, check out:

  * 📖 [Niomon SDK for Web API Reference](/docs/apis/niomon-js)
  * 📖 [OpenID Connect](/docs/auth/oidc)