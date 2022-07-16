# Sign-In with Ethereum

[Sign-In with Ethereum](https://login.xyz/) (SIWE) is a new form of authentication that enables
users to control their digital identity with their Ethereum account and ENS profile instead of
relying on a traditional intermediary. Already used throughout Web3, this effort standardizes the
method with best practices and makes it easy to adopt securely.

The Ethereum Foundation and Ethereum Name Service (ENS) put forward a Request for Proposal for Sign-in with Ethereum in 2021, which would enable users to use their Ethereum accounts to access web services instead of accounts owned by large corporations.

The Ethereum ecosystem already has tens of millions of monthly active wallet users signing with their cryptographic keys for financial transactions, community governance, and more.

The security of these wallets has been proven across billions of dollars of digital assets at stake--not theoretical security, but real tests in production. These secure wallets can also be used to sign in to Web2 services.

## Benefits to Web2 and Web3

Sign-In with Ethereum describes how to use Ethereum accounts to authenticate with off-chain
services by signing a standard message format parameterized by scope, session details, and security
mechanisms (e.g., a nonce).

Many services already support workflows to authenticate Ethereum accounts using message signing,
such as establishing a cookie-based web session that can manage privileged metadata about the
authenticating address.

The Sign-In with Ethereum standard provides several additional benefits:

  * For Web2, this is an opportunity to give users control over their identifiers and slowly
    introduce their dedicated user bases to Web3. By providing a strict specification that can be
    followed along with any necessary tooling to ease any integration concerns, Sign-In with
    Ethereum has a chance at truly transforming how individuals interact with apps and services.

  * For Web3, this is an opportunity to standardize the sign-in workflow and improve
    interoperability across existing services, while also providing wallet vendors a reliable
    method to identify signing requests as Sign-In with Ethereum requests for improved UX.

## Example message to be signed

```
service.org wants you to sign in with your Ethereum account:
0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2

I accept the ServiceOrg Terms of Service: https://service.org/tos

URI: https://service.org/login
Version: 1
Chain ID: 1
Nonce: 32891756
Issued At: 2021-09-30T16:25:24Z
Resources:
- ipfs://bafybeiemxf5abjwjbikoz4mc3a3dla6ual3jsgpdr4cjr3oz3evfyavhwq/
- https://example.com/my-web2-claim.json
```

## Community resources

The following is a list of libraries and guides made available by the Sign-In with Ethereum
community.

:::note

Some of the listed items may have not yet undergone formal security audits, and
may also be experimental or alpha stage.

:::

### Libraries and Projects
  * https://github.com/payton/django-siwe-auth/ (Django)
  * https://github.com/jaerith/siwe-nethereum (C#)
  * https://github.com/joshrutkowski/siwe-starter (Next.js + Iron-Session)
  * https://github.com/artpi/wp-dao (WordPress)
  * https://github.com/mikery/serverless-siwe (Serverless SIWE)
  * https://github.com/vanruch/fastify-siwe (Fastify SIWE)

### Guides

  * https://wagmi-xyz.vercel.app/guides/sign-in-with-ethereum

## Learn more

  * [Sign-In with Ethereum Website](https://login.xyz/)