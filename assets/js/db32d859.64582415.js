"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[653],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),y=r,m=p["".concat(c,".").concat(y)]||p[y]||d[y]||o;return n?i.createElement(m,a(a({ref:t},u),{},{components:n})):i.createElement(m,a({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7215:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l}});var i=n(3117),r=(n(7294),n(3905));const o={},a="Security",s={unversionedId:"security",id:"security",title:"Security",description:"Niomon is a secure and user-centric authentication infrastructure for Web3. It streamlines the",source:"@site/docs/security.md",sourceDirName:".",slug:"/security",permalink:"/docs/security",draft:!1,editUrl:"https://github.com/niomon/niomon-docs/blob/main/docs/security.md",tags:[],version:"current",lastUpdatedAt:1657685264,formattedLastUpdatedAt:"Jul 13, 2022",frontMatter:{},sidebar:"docs",previous:{title:"Home",permalink:"/docs/"},next:{title:"Supported Networks",permalink:"/docs/networks"}},c={},l=[{value:"Objectives",id:"objectives",level:2},{value:"Non-custodial",id:"non-custodial",level:3},{value:"Usable by Everyone",id:"usable-by-everyone",level:3},{value:"On-demand Security",id:"on-demand-security",level:3},{value:"Chain Agnostic",id:"chain-agnostic",level:3},{value:"Pragmatism",id:"pragmatism",level:3},{value:"Architecture",id:"architecture",level:2},{value:"Key Management",id:"key-management",level:3},{value:"Disaster Recovery",id:"disaster-recovery",level:3},{value:"Phishing Protection",id:"phishing-protection",level:2},{value:"Infrastructure Security",id:"infrastructure-security",level:2},{value:"Encryption in Transit",id:"encryption-in-transit",level:3},{value:"Encryption at Rest",id:"encryption-at-rest",level:3},{value:"Network Policy",id:"network-policy",level:3},{value:"Monitoring and Intrusion Detection",id:"monitoring-and-intrusion-detection",level:3},{value:"Third-party Security Assessment",id:"third-party-security-assessment",level:2},{value:"Security Contact",id:"security-contact",level:2}],u={toc:l};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"security"},"Security"),(0,r.kt)("p",null,"Niomon is a secure and user-centric authentication infrastructure for Web3. It streamlines the\nonboarding flow for mainstream users and enables developers to manage identities in the Web3\necosystem. Because managing identities and authentication are vital responsibilities, security is\nalways a priority at Niomon. This document provides details about the security architecture of\nNiomon products, including Niomon Auth, Niomon Checkout, and Ditto."),(0,r.kt)("h2",{id:"objectives"},"Objectives"),(0,r.kt)("h3",{id:"non-custodial"},"Non-custodial"),(0,r.kt)("p",null,"Users are always in control of their identities and cryptographic keys. Cryptographic operations of\nusers' private keys are executed in a Trusted Execution Environment (TEE), which never exposes\nsecret keys to an untrusted platform. Niomon is designed in a way that service providers (including\nus) cannot access users' private keys. Furthermore, users can export their secret seed phrase to\nmigrate to a different wallet service."),(0,r.kt)("h3",{id:"usable-by-everyone"},"Usable by Everyone"),(0,r.kt)("p",null,"Ditto enables mainstream users to access decentralized identity and cryptographic key services with\nthe familiar login methods of the current web, significantly improving the user experience of the\nonboarding to Web3. Moreover, Niomon's secure recovery service prevents users from losing valuable\nassets and identities in accidentals such as losing devices or forgetting passwords."),(0,r.kt)("h3",{id:"on-demand-security"},"On-demand Security"),(0,r.kt)("p",null,"There is no one-size-fits-all solution to security. Therefore, Niomon aims to provide a default\nsecurity level suitable for most people, and optional security features are available to users who\nneed increased protection."),(0,r.kt)("h3",{id:"chain-agnostic"},"Chain Agnostic"),(0,r.kt)("p",null,"Niomon is designed to support all modern cryptographic constructs natively using an off-chain\ninfrastructure, making Niomon compatible with different blockchains based on various designs and\ntechnologies."),(0,r.kt)("h3",{id:"pragmatism"},"Pragmatism"),(0,r.kt)("p",null,"Niomon believes in a pragmatic approach to design security into our products. We combine proven\ncryptographic protocols and rigorous engineering to achieve maximum security and the utmost user\nexperience."),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("h3",{id:"key-management"},"Key Management"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Secretd Architecture",src:n(7742).Z,width:"1418",height:"766"})),(0,r.kt)("p",null,"Niomon's key management service is powered by Secretd, an open-source Key Management System built\nby Niomon."),(0,r.kt)("p",null,"The core of Secretd is the Trusted Execution Environment (TEE) enclaves. Secretd supports different\nTEE platforms, including Intel SGX and AWS Nitro Enclaves. Currently, Niomon's public cloud\nservices and Ditto use AWS Nitro Enclaves."),(0,r.kt)("p",null,"TEE enclaves are isolated execution environments, hardened, and highly constrained. They have no\npersistent storage, no interactive access, and no external networking. Secretd is a Key Management\nSystem that allows all cryptographic operations to be delegated to a TEE confined process.\nCommunication between secretd and applications is done using an end-to-end encrypted channel using\nthe Noise Protocol. As a result, cryptographic keys never need to leave the trust boundary of an\nenclave, reducing the attack surface area for the most sensitive operations."),(0,r.kt)("h3",{id:"disaster-recovery"},"Disaster Recovery"),(0,r.kt)("p",null,"A Disaster Recovery Key (DRK) is generated in a Key Ceremony. The key is split into five shares\nusing Shamir's Secret Sharing algorithm, and at least three shares are required to recover the\nkeys. Niomon holds two of the shares, and three independent individuals hold the remaining three.\nThe key holders are committed to participating in recovering the keys in the unlikely event that\nall of our redundant key management systems become inoperable."),(0,r.kt)("h2",{id:"phishing-protection"},"Phishing Protection"),(0,r.kt)("p",null,"Phishing attacks are a common problem in Web3. Niomon is working towards mitigating this problem to\ncreate a safer place for everyday users. For example, apps and games connected to Ditto are\nverified and vetted by us for authenticity and safety. Also, Ditto actively blocks phishing sites\nthat pretend to be registered applications and protects users from the most common form of phishing\nattacks in Web3. In addition, Niomon users do not need to use a password, eliminating the many\nthreats related to stolen passwords."),(0,r.kt)("h2",{id:"infrastructure-security"},"Infrastructure Security"),(0,r.kt)("h3",{id:"encryption-in-transit"},"Encryption in Transit"),(0,r.kt)("p",null,"At Niomon, all external internet-facing service endpoints are end-to-end encrypted using Transport\nLayer Security (TLS). In addition, all internal traffic between data center regions (including\ntraffic between our CDN provider and our servers) is encrypted using TLS or Noise Protocol.\nSensitive internal traffic such as database connections is encrypted using vendor-specific\nprotocols, and encryption for non-sensitive data is encouraged whenever possible. This ensures that\nsensitive information is never transported in plaintext within and outside our internal network."),(0,r.kt)("h3",{id:"encryption-at-rest"},"Encryption at Rest"),(0,r.kt)("p",null,"All database snapshots, automated backups, and sensitive configurations are encrypted with AES-256,\nXSalsa20, or vendor-specific methods."),(0,r.kt)("h3",{id:"network-policy"},"Network Policy"),(0,r.kt)("p",null,"Niomon services are deployed in Google Cloud, Amazon Web Service, and Cloudflare in the United\nKingdom, the United States, and Taiwan. The production environment is isolated from development\nenvironments (dev and staging). Communication within the production network (such as between\nservices) is restricted by default with network policies. Administrative access to the production\nnetwork is available through a dedicated gateway from a protected physical location only."),(0,r.kt)("h3",{id:"monitoring-and-intrusion-detection"},"Monitoring and Intrusion Detection"),(0,r.kt)("p",null,"Monitoring is an essential part of a cybersecurity policy. Niomon collects and analyzes logs\nproduced by our services and network traffics. We also deploy Intrusion Detection System (IDS) to\nassist us in detecting attacks and mitigating threats."),(0,r.kt)("h2",{id:"third-party-security-assessment"},"Third-party Security Assessment"),(0,r.kt)("p",null,"Niomon's software and infrastructure are regularly subject to penetration testing by external\nsecurity service vendors and our internal security engineers."),(0,r.kt)("h2",{id:"security-contact"},"Security Contact"),(0,r.kt)("p",null,"If you find any security vulnerability, please report it to ",(0,r.kt)("a",{parentName:"p",href:"mailto:security@niomonid.com"},"security@niomonid.com"),"."))}d.isMDXComponent=!0},7742:function(e,t,n){t.Z=n.p+"assets/images/secretd_architecture-29bcd1f674e6aebee1ee27564ed6833a.png"}}]);