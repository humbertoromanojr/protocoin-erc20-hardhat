// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import {ProtoCoin} from "./ProtoCoin.sol";
import {Test} from "forge-std/Test.sol";

// Solidity tests are compatible with foundry, so they
// use the same syntax and offer the same functionality.

contract ProtoCoinTest is Test {
  ProtoCoin protoCoin;

  address public owner;
  address public otherAccount;

  function setUp() public {
    owner = makeAddr("owner");
    otherAccount = makeAddr("otherAccount");

    // faz deploy em nome do Owner
    vm.startPrank(owner);
    protoCoin = new ProtoCoin();
    vm.stopPrank();
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

  function test_balanceOf() public view {
    require(protoCoin.balanceOf(owner) == 1000 * 10 ** 18, "Balance should be 1000 * 10 ** 18");
  }

  function test_transfer() public {
    vm.startPrank(owner);

      uint256 ownerBalanceBefore = protoCoin.balanceOf(owner);
      uint256 otherBalanceBefore = protoCoin.balanceOf(otherAccount);

      protoCoin.transfer(otherAccount, 1);

      uint256 ownerBalanceAfter = protoCoin.balanceOf(owner);
      uint256 otherBalanceAfter = protoCoin.balanceOf(otherAccount);

      require(
        ownerBalanceBefore == 1000 * 10 ** 18, 
        "ownerBalanceBefore Balance should be 1000 * 10 ** 18"
      );

      require(
        ownerBalanceAfter == (1000 * 10 ** 18) - 1, 
        "ownerBalanceAfter Balance should be (1000 * 10 ** 18) - 1"
      );

      require(
        otherBalanceBefore == 0, 
        "otherBalanceBefore Balance should be 0"
      );

      require(
        otherBalanceAfter == 1, 
        "otherBalanceAfter Balance should be 1"
      );
    vm.stopPrank();  
  }

  function test_transferError() public {
    vm.startPrank(otherAccount);
      vm.expectRevert(bytes("Insufficient balance"));
      protoCoin.transfer(owner, 1);
    vm.stopPrank(); 
  }

  function test_approve() public {
    vm.startPrank(owner);
    protoCoin.approve(otherAccount, 1);
    uint256 value = protoCoin.allowance(owner, otherAccount);
    require(
      value == 1,
      "Allowance should be 1"
    );
    vm.stopPrank(); 
  }

}
