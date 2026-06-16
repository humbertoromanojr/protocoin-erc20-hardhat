// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import {ProtoCoin} from "./ProtoCoin.sol";
import {Test} from "forge-std/Test.sol";

// Solidity tests are compatible with foundry, so they
// use the same syntax and offer the same functionality.

contract ProtoCoinTest is Test {
  ProtoCoin protoCoin;

  function setUp() public {
    protoCoin = new ProtoCoin();
  }

  function compareStrings(string memory a, string memory b) 
    public 
    pure 
    returns (bool) 
  {
    return keccak256(bytes(a)) == keccak256(bytes(b));
  }

  function test_name() public view {
    require(compareStrings(protoCoin.name(), "ProtoCoin"), "Name should be ProtoCoin");
  }

  function test_symbol() public view {
    require(compareStrings(protoCoin.symbol(), "PRC"), "Symbol should be PRC");
  }

  function test_decimals() public view {
    require(protoCoin.decimals() == 18, "Decimals should be 18");
  }

  function test_totalSupply() public view {
    require(protoCoin.totalSupply() == 1000 * 10 ** 18, "TotalSupply should be 1000 * 10 ** 18");
  }

}
