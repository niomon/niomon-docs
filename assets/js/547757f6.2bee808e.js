"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[150],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},p=Object.keys(t);for(a=0;a<p.length;a++)n=p[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(a=0;a<p.length;a++)n=p[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),o=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=o(t.components);return a.createElement(m.Provider,{value:e},t.children)},i={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,p=t.originalType,m=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),k=o(n),s=r,N=k["".concat(m,".").concat(s)]||k[s]||i[s]||p;return n?a.createElement(N,l(l({ref:e},u),{},{components:n})):a.createElement(N,l({ref:e},u))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var p=n.length,l=new Array(p);l[0]=k;var d={};for(var m in e)hasOwnProperty.call(e,m)&&(d[m]=e[m]);d.originalType=t,d.mdxType="string"==typeof t?t:r,l[1]=d;for(var o=2;o<p;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8171:function(t,e,n){n.r(e),n.d(e,{Deprecated:function(){return s},Provider:function(){return k},Q4:function(){return N},Supported:function(){return u},Unsupported:function(){return i},assets:function(){return m},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return o}});var a=n(3117),r=(n(7294),n(3905));const p={},l="Supported Networks",d={unversionedId:"networks",id:"networks",title:"Supported Networks",description:"This table lists Niomon's current feature availability for each of its supported chains.",source:"@site/docs/networks.md",sourceDirName:".",slug:"/networks",permalink:"/docs/networks",draft:!1,editUrl:"https://github.com/niomon/niomon-docs/blob/main/docs/networks.md",tags:[],version:"current",lastUpdatedAt:1657987593,formattedLastUpdatedAt:"Jul 16, 2022",frontMatter:{},sidebar:"docs",previous:{title:"Security",permalink:"/docs/security"},next:{title:"Examples",permalink:"/docs/examples"}},m={},o=[],u=()=>(0,r.kt)("span",{class:"badge badge--success"},"supported"),i=()=>(0,r.kt)("span",{class:"badge badge--danger"},"unsupported"),k=()=>(0,r.kt)("span",{class:"badge badge--info"},"provider"),s=()=>(0,r.kt)("span",{class:"badge badge--secondary"},"deprecated"),N=()=>(0,r.kt)("span",{class:"badge badge--secondary"},"Q4'22"),f={toc:o,Supported:u,Unsupported:i,Provider:k,Deprecated:s,Q4:N};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"supported-networks"},"Supported Networks"),(0,r.kt)("p",null,"This table lists Niomon's current feature availability for each of its supported chains."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Network"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Auth"),(0,r.kt)("th",{parentName:"tr",align:null},"Wallet Kit"),(0,r.kt)("th",{parentName:"tr",align:null},"Ditto"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ethereum"),(0,r.kt)("td",{parentName:"tr",align:null},"Ethereum mainnet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(u,{mdxType:"Supported"}),"\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(u,{mdxType:"Supported"}),"\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(u,{mdxType:"Supported"}),"\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sepolia"),(0,r.kt)("td",{parentName:"tr",align:null},"Ethereum Sepolia testnet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(u,{mdxType:"Supported"})," ",(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(u,{mdxType:"Supported"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(u,{mdxType:"Supported"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"goerli"),(0,r.kt)("td",{parentName:"tr",align:null},"Ethereum Goerli testnet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(u,{mdxType:"Supported"})," ",(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(u,{mdxType:"Supported"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(u,{mdxType:"Supported"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ropsten"),(0,r.kt)("td",{parentName:"tr",align:null},"Ethereum Ropsten testnet ",(0,r.kt)(s,{mdxType:"Deprecated"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(u,{mdxType:"Supported"})," ",(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(u,{mdxType:"Supported"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(i,{mdxType:"Unsupported"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rinkeby"),(0,r.kt)("td",{parentName:"tr",align:null},"Ethereum Rinkeby testnet ",(0,r.kt)(s,{mdxType:"Deprecated"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(u,{mdxType:"Supported"})," ",(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(u,{mdxType:"Supported"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(i,{mdxType:"Unsupported"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"polygon"),(0,r.kt)("td",{parentName:"tr",align:null},"Polygon mainnet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(u,{mdxType:"Supported"})," ",(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(u,{mdxType:"Supported"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(u,{mdxType:"Supported"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mumbai"),(0,r.kt)("td",{parentName:"tr",align:null},"Polygon Mumbai testnet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(u,{mdxType:"Supported"})," ",(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(u,{mdxType:"Supported"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(u,{mdxType:"Supported"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bsc"),(0,r.kt)("td",{parentName:"tr",align:null},"Binance Smart Chain mainnet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(u,{mdxType:"Supported"})," ",(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(u,{mdxType:"Supported"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(u,{mdxType:"Supported"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bsc-testnet"),(0,r.kt)("td",{parentName:"tr",align:null},"Binance Smart Chain testnet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(u,{mdxType:"Supported"})," ",(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(u,{mdxType:"Supported"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(u,{mdxType:"Supported"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"arbitrum"),(0,r.kt)("td",{parentName:"tr",align:null},"Arbitrum (Ethereum L2) mainnet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(u,{mdxType:"Supported"})," ",(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(k,{mdxType:"Provider"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(N,{mdxType:"Q4"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"arbitrum-rinkeby"),(0,r.kt)("td",{parentName:"tr",align:null},"Arbitrum (Ethereum L2) Rinkeby testnet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(u,{mdxType:"Supported"})," ",(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(k,{mdxType:"Provider"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(N,{mdxType:"Q4"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"optimism"),(0,r.kt)("td",{parentName:"tr",align:null},"Optimism (Ethereum L2) mainnet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(u,{mdxType:"Supported"})," ",(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(k,{mdxType:"Provider"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(N,{mdxType:"Q4"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"optimism-kovan"),(0,r.kt)("td",{parentName:"tr",align:null},"Optimism (Ethereum L2) Kovan testnet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(u,{mdxType:"Supported"})," ",(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(k,{mdxType:"Provider"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(N,{mdxType:"Q4"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zksync2-testnet"),(0,r.kt)("td",{parentName:"tr",align:null},"zkSync V2 testnet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(i,{mdxType:"Unsupported"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(N,{mdxType:"Q4"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(N,{mdxType:"Q4"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"immutable"),(0,r.kt)("td",{parentName:"tr",align:null},"Immutable X"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(i,{mdxType:"Unsupported"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(N,{mdxType:"Q4"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(N,{mdxType:"Q4"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"solana"),(0,r.kt)("td",{parentName:"tr",align:null},"Solana mainnet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(N,{mdxType:"Q4"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(N,{mdxType:"Q4"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(N,{mdxType:"Q4"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"solana-testnet"),(0,r.kt)("td",{parentName:"tr",align:null},"Solana testnet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(N,{mdxType:"Q4"})," ",(0,r.kt)("sup",{parentName:"td",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(N,{mdxType:"Q4"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(N,{mdxType:"Q4"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cosmos-sdk"),(0,r.kt)("td",{parentName:"tr",align:null},"Cosmos SDK based chains"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(i,{mdxType:"Unsupported"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(k,{mdxType:"Provider"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(i,{mdxType:"Unsupported"}))))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"Use Solana identity for authentication.",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Use Ethereum identity for authentication.",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0}}]);