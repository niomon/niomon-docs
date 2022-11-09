---
title: Specification
---
# Token Pass Specification

## Abstract

This document describe the generation and verification of Token Pass, a W3C Verifiable Credential that proves the Verifiable Credential Presenter has ownership, or control, of certain NFT.

## Introduction

Token Pass is a W3C Verifiable Credential asserting that the presenter has ownership of an NFT. It can be used for tokengating events in which eligibility to entry is determined by whether the participant has ownership of certain NFTs. The participant signs a proof using an blockchain wallet application, and the proof is attached to the Verifiable Credential to be presented for verification.

By using Verifiable Credential and Decentralized Identity standards, it is possible to delegate ownership to another wallet, so that another wallet address can sign proofs on behalf of the owning address.

The Token Pass can be optionally encoded in a QR code so that it can be presented and scanned in person.

## Representation

The Token Pass is a Verifiable Credential that contains a number of claims and proofs. Representation of a Token Pass MUST use the same data model and definitions as the specification of Verifiable Credential Data Model.

### Decentralized Identifier

The decentralized identifier of the NFT is defined as follows:

```json
did:ethrnft:chain:contractAddress:tokenId
```

- `did` - literal `did`
- `ethrnft` - literal `ethrnft`
- `chain` - a hex string of the chain ID of the blockchain
- `contractAddress` - a hex string of the NFT’s contract address
- `tokenId` - a hex string of the NFT’s token ID

Example:

`did:ethrnft:0x1:0x00420000123456789abcdef0123456789abcdef0:0x01d681`

### Credential

A typical Token Pass Generator SHOULD include the following properties: 

- `id` - The value SHOULD be a unique identifier of this credential.
- `credentialSubject` - The value CAN be an object or a set of objects, each MUST contain an `id` property.
    - `id` - This property MUST be present. The value MUST be the decentralized identifier of the NFT to be claimed ownership of
- `issuanceDate` - the value MUST be an ISO8601 formatted string representing the date and time the credential becomes valid.
- `expirationDate` - The value MUST be an ISO8601 formatted string representing the date and time the credential ceases to be valid.

While the Verifiable Credential Data Model specification defines these properties to be optional, a typical Token Pass Verifier CAN require that these properties be present. This is often the case for `credentialSubject` because without this property, the credential makes no claims of any NFTs.

### Proof

The Token Pass Generator SHOULD use `EthereumEip712Signature2021` to generate the proof of the claim. A typical Proof should include the following properties:

- `type` - The value SHOULD be `EthereumEip712Signature2021`.
- `created` - The value MUST be an ISO8601 formatted string representing the date and time the proof is generated.
- `proofPurpose` - The value SHOULD be `assertionMethod`.
- `proofValue` - The value MUST be hex encoded output of the EIP712 signature function using the `EthereumEip712Signature2021` signature suite.
- `verificationMethod` - The value MUST be the `id` of the verification method defined in the NFT’s DID Document. The value SHOULD be the decentralized identifier of the NFT, followed by `#owner`.
- `eip712` - The value SHOULD be an object containing these properties:
    - `primaryType` - The value MUST be `VerifiableCredential`.
    - `domain` - The value MUST be the same as the domain object defined in EIP712.

### Example

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1"
  ],
  "id": "did:ethrnft:0x1:0x00420000123456789abcdef0123456789abcdef0:0x01d681",
  "type": [
    "VerifiableCredential"
  ],
  "expirationDate": "2022-10-27T09:43:05.295Z",
  "credentialSubject": {
    "id": "did:ethrnft:0x1:0x00420000123456789abcdef0123456789abcdef0:0x01d681"
  },
  "proof": {
    "type": "EthereumEip712Signature2021",
    "created": "2022-10-27T09:42:06.403Z",
    "proofPurpose": "assertionMethod",
    "proofValue": "0x6319bfa27681c797b4154bfa23cfa4d363e1d7a3e3973b37f408269659dd041a03630adefd2d6ebbca47e4bfa09c246121cfec734806da32654d6232bb0a82191c",
    "verificationMethod": "did:ethrnft:0x1:0x00420000123456789abcdef0123456789abcdef0:0x01d681#owner",
    "eip712": {
      "primaryType": "VerifiableCredential",
      "domain": {
        "version": "1"
      }
    }
  }
}
```

### QR Encoding

Token Pass CAN be encoded as a QR code for presentation at a physical location. When encoded as a QR code, the Verifiable Credential CAN be compressed using zlib compression. If compression is applied, the compressed data MUST be encoded using base45 encoding scheme.

## Decentralized Identity

### DID Document

A Token Pass Verifier SHOULD generates a DID Document using the decentralized identifier of the claimed NFT. The resolved document SHOULD contain an `assertionMethod` property that CAN be resolved to a verification method. The verification method SHOULD contain a `blockchainAccountId` that specify the block chain address owning the NFT.

A Token Pass Verifier MAY skips DID Document generation and checks the claim against ownership info on chain.

Example of DID Document:

```json
{
  "@context": [
    "https://www.w3.org/ns/did/v1",
    "https://w3id.org/security/suites/secp256k1recovery-2020/v2"
  ],
  "id": "did:ethrnft:0x1:0x00420000123456789abcdef0123456789abcdef0:0x01d681",
  "verificationMethod": [
    {
      "id": "did:ethrnft:0x1:0x00420000123456789abcdef0123456789abcdef0:0x01d681#owner",
      "type": "EcdsaSecp256k1RecoveryMethod2020",
      "controller": "did:ethr:0x1:0x00330000123456789abcdef0123456789abcdef0",
      "blockchainAccountId": "eip155:1:0x00330000123456789abcdef0123456789abcdef0"
    }
  ],
  "authentication": [
    "did:ethrnft:0x1:0x00420000123456789abcdef0123456789abcdef0:0x01d681#owner"
  ],
  "assertionMethod": [
    "did:ethrnft:0x1:0x00420000123456789abcdef0123456789abcdef0:0x01d681#owner"
  ]
}
```

### DID Registry

A DID resolver can use a DID registry in which delegations of ownership of an NFT are recorded. In this case, the DID Document may contain multiple verification method, each verification method may references a different blockchain address.

In this case, a Token Pass Generator SHOULD specify a verification method containing a delegated blockchain address. A Token Pass Verifier SHOULD select a matching verification method from the DID document.

## Verification

Token Pass Verifier SHOULD take the following steps when checking credential in a Token Pass.

- The payload MUST be a valid JSON document, or a encoded JSON document.
- The payload MUST contain `VerifiableCredential` as one of the strings in the `type` property.
- If `issuanceDate` is present, it MUST contain an ISO8601 date/time that is now or in the past.
- If `expirationDate` is present, it MUST contain an ISO8601 date/time that is in the future.
- The payload MUST contain a `credentialSubject` property. Its value CAN be an object or a set of object.
- Each object in the `credentialSubject` property MUST contain an `id` property with a decentralized identity of the NFT as value.

A Verifier SHOULD use the `id` of the object(s) in `credentialSubject` property to fetch ownership information from chain. A DID Document SHOULD be resolved for each NFT claimed. All claimed NFT MUST be owned by or delegated to the same blockchain account.

Token Pass Verifier SHOULD take the following steps to verify the proof in a Token Pass:

- The proof MUST contain a `type` property with value set to `EthereumEip712Signature2021`.
- The proof MUST contain a `proofPurpose` property with value set to `assertionMethod`.
- A matching `verificationMethod` and `proofPurpose` MUST exist in the resolved DID document.
- The `proofValue` MUST contains a signature that were signed by a blockchain account that is the same as the one specified in the `blockchainAccountId` in the DID Document.

Token Pass CAN be encoded as a QR code for presentation at a physical location. When decoding from a QR code, a Verifier SHOULD check that the payload is a JSON-formatted string. If the payload is not a JSON-formatted string, it SHOULD decode the payload using base45 encoding scheme. If the decoded payload is not JSON-formatted string, decompress the payload using zlib compression algorithm.

## Security Considerations

- To mitigate a replay attack, Token Pass Generator SHOULD include an `expirationDate` in the Token Pass. Token Pass Verifier SHOULD require that `expirationDate` be present and the value contains a date/time that is not too far in the future.
