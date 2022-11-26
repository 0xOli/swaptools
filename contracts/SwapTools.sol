// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.7.6;

import "@uniswap/v3-core/contracts/libraries/TickMath.sol";
import "@uniswap/v3-core/contracts/libraries/FixedPoint96.sol";
import "./libraries/ABDKMath64x64.sol";

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract SwapTools {
  constructor() {}

  function tick(uint256 price) public pure returns (int24 tick_) {
    tick_ = TickMath.getTickAtSqrtRatio(
      uint160(
        int160(
          ABDKMath64x64.sqrt(int128(int256(price << 64))) <<
          (FixedPoint96.RESOLUTION - 64)
        )
      )
    );
  }
}
