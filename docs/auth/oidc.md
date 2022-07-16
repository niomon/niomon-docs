---
sidebar_label: OpenID Connect
---

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
Also, in OIDC, the term “flow” is used in place of OAuth2 “grant”.

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

## OIDC Discovery

Niomon Auth supports the OIDC Discovery mechanism. The discovery document is located at:

```
GET https://api.niomonid.com/YOUR_TENANT/.well-known/openid-configuration
```

## Signing keys for JWTs

Niomon Auth uses the `ES256` algorithm (ECDSA using P-256 curve and SHA-256 hash algorithm) for
JWTs by default.

The public keys of JWTs issued by Niomon Auth can be found on the JSON Web Key Set document located
at:

```
GET https://api.niomonid.com/YOUR_TENANT/.well-known/jwks.json
```

## OIDC Flows

OIDC defines several authentication flows for different types of applications and security
requirements. Niomon supports the following:

  * **Authorization Code Flow**: In this flow, tokens are not returned directly to the client.
    Instead, the server exchanges an Authorization Code for a token using a Client Secret.
  * **Authorization Code Flow with PKCE**: For public clients (e.g. single-page or mobile apps),
    the [Proof Key for Code Exchange](https://tools.ietf.org/html/rfc7636) (PKCE) flow is used
    instead. This flow adds a secret (the Code Verifier) created by the client application that can
    be verified by the authorization server.

## OIDC Endpoints

### Authorization endpoint

```
GET https://api.niomonid.com/YOUR_TENANT/oidc/authorize
```

The Authorization Endpoint performs Authentication of the End-User. This is done by sending the
User Agent to the Authorization Server's Authorization Endpoint for Authentication and
Authorization, using request parameters defined by OAuth 2.0 and additional parameters and
parameter values defined by OpenID Connect.

The request parameters are:

| Parameter       | Description                                                                                                                      |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------|
| `scope`         | REQUIRED. OpenID Connect requests MUST contain the openid scope value.                                                           |
| `response_type` | REQUIRED. OAuth 2.0 Response Type. When using the Authorization Code Flow, this value is `code`.                                 |
| `client_id`     | REQUIRED. OAuth 2.0 Client Identifier valid at the Authorization Server.                                                         |
| `redirect_uri`  | REQUIRED. Redirection URI to which the response will be sent.                                                                    |
| `state`         | RECOMMENDED. Opaque value used to maintain state between the request and the callback.                                           |
| `response_mode` | OPTIONAL. Informs the Authorization Server of the mechanism to be used for returning parameters from the Authorization Endpoint. |
| `nonce`         | OPTIONAL. String value used to associate a Client session with an ID Token, and to mitigate replay attacks.                      |

OIDC uses the following `request_mode` parameter which is defined in [OAuth 2.0 Multiple Response
Type Encoding Practices](https://openid.net/specs/oauth-v2-multiple-response-types-1_0.html). It
can take the following values:

| Value         | Description                                                                                                                                                                                                                         |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `query`       | Authorization Response parameters are encoded in the query string added to the `redirect_uri` when redirecting back to the Client.                                                                                                  |
| `web_message` | This response mode is defined in [OAuth 2.0 Web Message Response Mode specification](https://tools.ietf.org/html/draft-sakimura-oauth-wmrm-00). It uses HTML5 Web Messaging instead of the redirect for the authorization response. |

### Token endpoint

```
POST https://api.niomonid.com/YOUR_TENANT/oidc/token
```

he token endpoint is used by the client to obtain an access token by presenting its authorization
grant or refresh token.

Example request:

```http
POST /example/oidc/token HTTP/1.1
Host: api.niomonid.com
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code&code=SplxlOBeZQQYbYS6WxSbIA&redirect_uri=https%3A%2F%2Fclient.example.org%2Fcb
```

### UserInfo Endpoint

```
GET https://api.niomonid.com/YOUR_TENANT/oidc/userinfo
```

The UserInfo Endpoint is an OAuth 2.0 Protected Resource that returns Claims about the
authenticated End-User. To obtain the requested Claims about the End-User, the Client makes a
request to the UserInfo Endpoint using an Access Token obtained through OpenID Connect
Authentication.

Example request:

```http
GET /example/oidc/userinfo HTTP/1.1
Host: api.niomonid.com
Authorization: Bearer SlAV32hkKG
```

## Learn more

  * [OIDC Specifications](https://openid.net/developers/specs/)