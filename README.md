# Calldata for SwapRouter02

This repository provides a helper script to generate calldata for the [SwapRouter02](https://docs.uniswap.org/contracts/v3/reference/deployments/arbitrum-deployments) contract, used in the [UniswapX](https://github.com/moltam89/scaffold-eth-2/tree/UniswapX) demo.

## Quickstart
Set up a local node using the [UniswapX](https://github.com/moltam89/scaffold-eth-2/tree/UniswapX) repository:
```
git clone https://github.com/moltam89/scaffold-eth-2/tree/UniswapX
```
```
cd UniswapX
```
```
yarn install
```
```
yarn fork
```

```
yarn setCode
```
Once the local Arbitrum fork is running, you can generate the calldata using this repository:

```
npm install
```
```
npx ts-node src/index.ts
```

## Details

In the UniswapX repository, we fill an intent using the SwapRouter02 contract. To achieve this, we generate the calldata for SwapRouter02, which will ultimately swap USDC for USDT. However, in local Arbitrum forks, certain precompiled contracts like [ArbGasInfo](https://docs.arbitrum.io/build-decentralized-apps/precompiles/reference#arbgasinfo) are unavailable. To address this, we use a setCode script to mock their behavior.
