import {
  CurrencyAmount,
  Percent,
  Token,
  TradeType,
} from "@uniswap/sdk-core";
import {
  AlphaRouter,
  SwapOptionsSwapRouter02,
  SwapType,
} from "@uniswap/smart-order-router";
import { ethers } from "ethers";

const SWAP_ROUTER_02_EXECUTOR_ADDRESS_HARDHAT_TEST =
  "0xCf027C4b03DC18A60422AB981b1Ea1A27EC2E06F";

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(
    "http://127.0.0.1:8545"
  );

  const chainId = 42161; // arbitrum

  const router = new AlphaRouter({
    chainId: chainId,
    provider: provider,
  });

  const options: SwapOptionsSwapRouter02 = {
    recipient: SWAP_ROUTER_02_EXECUTOR_ADDRESS_HARDHAT_TEST,
    slippageTolerance: new Percent(50, 10_000),
    deadline: Math.floor(Date.now() / 1000 + 180000),
    type: SwapType.SWAP_ROUTER_02,
  };

  const token0 = new Token(
    chainId,
    "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
    6,
    "USDC",
    "USD Coin"
  );
  const token1 = new Token(
    chainId,
    "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
    6,
    "USDT",
    "Tether USD"
  );

  const inputAmount = 1001376542;

  const route = await router.route(
    CurrencyAmount.fromRawAmount(token0, inputAmount), // 1,001.376542 USDC
    token1,
    TradeType.EXACT_INPUT,
    options
  );

  // console.log("route", route);
  // console.log("routeJSON", JSON.stringify(route));
  console.log(
    `calldata for swapping ${inputAmount} USDC to ${route?.quote.numerator} USDT: ${route?.methodParameters?.calldata}`
  );
}

main();
