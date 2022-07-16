# OpenID Connect (OIDC)

OpenID Connect (OIDC) is an identity layer on top of the OAuth 2.0 protocol. It allows Clients to
verify the identity of the End-User based on the authentication performed by an Authorization
Server, as well as to obtain basic profile information about the End-User in an interoperable and
REST-like manner.

## OIDC vs OAuth2

While OAuth 2.0 is about resource access and sharing, OIDC is about user authentication.

OIDC uses OAuth 2.0 as an underlying protocol and adds a few extensions on top of it. It adds a
special scope value (`openid`), the use of an extra token (the ID Token, which encapsulates the
identity claims in JSON format), and the emphasis on authentication rather than authorization.
Also, in OIDC, the term “flow” is used in place of OAuth2 “grant”

## Tokens

An OIDC provider (normally called the Identity Provider or IdP) performs user authentication, user
consent, and token issuance. The client or service requesting a user's identity is normally called
the Relying Party (RP). It can be a regular web application, a single-page web app, or a mobile
app.

OpenID uses several types of tokens on top of OAuth 2.0 to provide a simple identity layer. This
includes:

  * **ID Token**: Specific to OIDC, this JWT format token provides the identity data describing a
    user profile. The data about the authentication result and the user profile information are
    called claims. The user profile claims may be any data that is pertinent to the Relying Party
    for identification purposes, such as a persistent ID, email address, name, etc. ID Tokens are
    digitally signed to prevent tampering.

  * **Access Token**: Defined in OAuth2, this (optional) short lifetime token provides access to
    specific user resources as defined in the scope values in the request to the authorization
    server.

  * **Refresh Token**: Defined in OAuth2, this token is usually long-lived and may be used to
    obtain new access tokens.

## OIDC Flows

OIDC defines several authentication flows for different types of applications and security
requirements. Niomon supports the following:

  * **Authorization Code Flow**: In this flow, tokens are not returned directly to the client.
    Instead, the server exchanges an Authorization Code for a token using a Client Secret.
  * **Authorization Code Flow with PKCE**: For public clients (e.g. single-page or mobile apps),
    the [Proof Key for Code Exchange](https://tools.ietf.org/html/rfc7636) (PKCE) flow is used
    instead. This flow adds a secret (the Code Verifier) created by the client application that can
    be verified by the authorization server.

## OIDC Discovery

Niomon Auth supports the OIDC Discovery mechanism. The discovery document is located at:

```
https://api.niomonid.com/YOUR_TENANT/.well-known/openid-configuration
```

## Signing algorithms for JWTs

Niomon Auth uses the `ES256` algorithm (ECDSA using P-256 curve and SHA-256 hash algorithm) for
JWTs by default.

The public key of Niomon Auth can be found on the JSON Web Key Set document:

```
https://api.niomonid.com/YOUR_TENANT/.well-known/openid-configuration
```