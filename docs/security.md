# Security

Niomon is a secure and user-centric authentication infrastructure for Web3. It streamlines the
onboarding flow for mainstream users and enables developers to manage identities in the Web3
ecosystem. Because managing identities and authentication are vital responsibilities, security is
always a priority at Niomon. This document provides details about the security architecture of
Niomon products, including Niomon Auth, Niomon Checkout, and Ditto.

## Objectives

### Non-custodial

Users are always in control of their identities and cryptographic keys. Cryptographic operations of
users' private keys are executed in a Trusted Execution Environment (TEE), which never exposes
secret keys to an untrusted platform. Niomon is designed in a way that service providers (including
us) cannot access users' private keys. Furthermore, users can export their secret seed phrase to
migrate to a different wallet service.

### Usable by Everyone

Ditto enables mainstream users to access decentralized identity and cryptographic key services with
the familiar login methods of the current web, significantly improving the user experience of the
onboarding to Web3. Moreover, Niomon's secure recovery service prevents users from losing valuable
assets and identities in accidentals such as losing devices or forgetting passwords.

### On-demand Security

There is no one-size-fits-all solution to security. Therefore, Niomon aims to provide a default
security level suitable for most people, and optional security features are available to users who
need increased protection.

### Chain Agnostic

Niomon is designed to support all modern cryptographic constructs natively using an off-chain
infrastructure, making Niomon compatible with different blockchains based on various designs and
technologies.

### Pragmatism

Niomon believes in a pragmatic approach to design security into our products. We combine proven
cryptographic protocols and rigorous engineering to achieve maximum security and the utmost user
experience.

## Architecture

### Key Management

![Secretd Architecture](/img/secretd_architecture.png)

Niomon's key management service is powered by Secretd, an open-source Key Management System built
by Niomon.

The core of Secretd is the Trusted Execution Environment (TEE) enclaves. Secretd supports different
TEE platforms, including Intel SGX and AWS Nitro Enclaves. Currently, Niomon's public cloud
services and Ditto use AWS Nitro Enclaves.

TEE enclaves are isolated execution environments, hardened, and highly constrained. They have no
persistent storage, no interactive access, and no external networking. Secretd is a Key Management
System that allows all cryptographic operations to be delegated to a TEE confined process.
Communication between secretd and applications is done using an end-to-end encrypted channel using
the Noise Protocol. As a result, cryptographic keys never need to leave the trust boundary of an
enclave, reducing the attack surface area for the most sensitive operations.

### Disaster Recovery

A Disaster Recovery Key (DRK) is generated in a Key Ceremony. The key is split into five shares
using Shamir's Secret Sharing algorithm, and at least three shares are required to recover the
keys. Niomon holds two of the shares, and three independent individuals hold the remaining three.
The key holders are committed to participating in recovering the keys in the unlikely event that
all of our redundant key management systems become inoperable.

## Phishing Protection

Phishing attacks are a common problem in Web3. Niomon is working towards mitigating this problem to
create a safer place for everyday users. For example, apps and games connected to Ditto are
verified and vetted by us for authenticity and safety. Also, Ditto actively blocks phishing sites
that pretend to be registered applications and protects users from the most common form of phishing
attacks in Web3. In addition, Niomon users do not need to use a password, eliminating the many
threats related to stolen passwords.

## Infrastructure Security

### Encryption in Transit

At Niomon, all external internet-facing service endpoints are end-to-end encrypted using Transport
Layer Security (TLS). In addition, all internal traffic between data center regions (including
traffic between our CDN provider and our servers) is encrypted using TLS or Noise Protocol.
Sensitive internal traffic such as database connections is encrypted using vendor-specific
protocols, and encryption for non-sensitive data is encouraged whenever possible. This ensures that
sensitive information is never transported in plaintext within and outside our internal network.

### Encryption at Rest

All database snapshots, automated backups, and sensitive configurations are encrypted with AES-256,
XSalsa20, or vendor-specific methods.

### Network Policy

Niomon services are deployed in Google Cloud, Amazon Web Service, and Cloudflare in the United
Kingdom, the United States, and Taiwan. The production environment is isolated from development
environments (dev and staging). Communication within the production network (such as between
services) is restricted by default with network policies. Administrative access to the production
network is available through a dedicated gateway from a protected physical location only.

### Monitoring and Intrusion Detection

Monitoring is an essential part of a cybersecurity policy. Niomon collects and analyzes logs
produced by our services and network traffics. We also deploy Intrusion Detection System (IDS) to
assist us in detecting attacks and mitigating threats.

## Third-party Security Assessment

Niomon's software and infrastructure are regularly subject to penetration testing by external
security service vendors and our internal security engineers.

## Security Contact

If you find any security vulnerability, please report it to security@niomonid.com.

