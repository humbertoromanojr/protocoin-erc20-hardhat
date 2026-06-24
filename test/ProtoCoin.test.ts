// wallet tests

import { expect } from "chai";
import { network } from "hardhat";

const { ethers } = await network.create();
// connect wallets
const [owner, otherAccount] = await ethers.getSigners();

describe("ProtoCoin", function () {
  it("Should have correct name", async function () {
    const contract = await ethers.deployContract("ProtoCoin");

    const name = await contract.name();
    expect(name).to.equal("ProtoCoin");
  });

  it("Should have correct symbol", async function () {
    const contract = await ethers.deployContract("ProtoCoin");

    const symbol = await contract.symbol();
    expect(symbol).to.equal("PRC");
  });

  it("Should have correct decimals", async function () {
    const contract = await ethers.deployContract("ProtoCoin");

    const decimals = await contract.decimals();
    expect(decimals).to.equal(18);
  });

  it("Should have correct totalSupply", async function () {
    const contract = await ethers.deployContract("ProtoCoin");

    const totalSupply = await contract.totalSupply();
    expect(totalSupply).to.equal(1000n * 10n ** 18n);
  });

  it("Should get balance", async function () {
    const contract = await ethers.deployContract("ProtoCoin");

    const balance = await contract.balanceOf(owner.address);
    expect(balance).to.equal(1000n * 10n ** 18n);
  });

  it("Should transfer", async function () {
    const contract = await ethers.deployContract("ProtoCoin");
    const balanceOwnerBefore = await contract.balanceOf(owner.address);
    const balanceOtherBefore = await contract.balanceOf(otherAccount.address);

    // transfer Owner to OtherAccount
    await contract.transfer(otherAccount.address, 1n);

    const balanceOwnerAfter = await contract.balanceOf(owner.address);
    const balanceOtherAfter = await contract.balanceOf(otherAccount.address);

    expect(balanceOwnerBefore).to.equal(1000n * 10n ** 18n);
    expect(balanceOwnerAfter).to.equal(1000n * 10n ** 18n - 1n);

    expect(balanceOtherBefore).to.equal(0n);
    expect(balanceOtherAfter).to.equal(1n);
  });

  it("Should NOT transfer", async function () {
    const contract = await ethers.deployContract("ProtoCoin");

    const instance = contract.connect(otherAccount);

    // verification if the fail
    await expect(instance.transfer(owner.address, 1n)).to.be.revertedWith(
      "Insufficient balance",
    );
  });

  it("Should approve", async function () {
    const contract = await ethers.deployContract("ProtoCoin");
    await contract.approve(otherAccount.address, 1n);

    const value = await contract.allowance(owner.address, otherAccount.address);
    expect(value).to.equal(1n);
  });

  it("Should transferFrom", async function () {
    const contract = await ethers.deployContract("ProtoCoin");
    const balanceOwnerBefore = await contract.balanceOf(owner.address);
    const balanceOtherBefore = await contract.balanceOf(otherAccount.address);

    await contract.approve(otherAccount.address, 10n);

    const instance = contract.connect(otherAccount);
    await instance.transferFrom(owner.address, otherAccount.address, 5n);

    const balanceOwnerAfter = await contract.balanceOf(owner.address);
    const balanceOtherAfter = await contract.balanceOf(otherAccount.address);

    const allowance = await contract.allowance(
      owner.address,
      otherAccount.address,
    );

    expect(balanceOwnerBefore).to.equal(1000n * 10n ** 18n);
    expect(balanceOwnerAfter).to.equal(1000n * 10n ** 18n - 5n);

    expect(balanceOtherBefore).to.equal(0n);
    expect(balanceOtherAfter).to.equal(5n);

    expect(allowance).to.equal(5n);
  });

  it("Should NOT transferFrom (balance)", async function () {
    const contract = await ethers.deployContract("ProtoCoin");

    const instance = contract.connect(otherAccount);

    await expect(
      instance.transferFrom(otherAccount.address, otherAccount, 1n),
    ).to.revertedWith("Insufficient balance");
  });

  it("Should NOT transferFrom (allowance)", async function () {
    const contract = await ethers.deployContract("ProtoCoin");

    const instance = contract.connect(otherAccount);

    await expect(
      instance.transferFrom(owner.address, otherAccount, 1n),
    ).to.revertedWith("Insufficient allowance");
  });
});
