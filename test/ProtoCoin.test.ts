import { expect } from "chai";
import { network } from "hardhat";

const { ethers } = await network.create();

describe("ProtoCoin", function () {
  it("Should have correct name ", async function () {
    const contract = await ethers.deployContract("ProtoCoin");

    const name = await contract.name();
    expect(name).to.equal("ProtoCoin");
  });

  it("Should have correct symbol ", async function () {
    const contract = await ethers.deployContract("ProtoCoin");

    const symbol = await contract.symbol();
    expect(symbol).to.equal("PRC");
  });

  it("Should have correct decimals ", async function () {
    const contract = await ethers.deployContract("ProtoCoin");

    const decimals = await contract.decimals();
    expect(decimals).to.equal(18);
  });

  it("Should have correct totalSupply ", async function () {
    const contract = await ethers.deployContract("ProtoCoin");

    const totalSupply = await contract.totalSupply();
    expect(totalSupply).to.equal(1000n * 10n ** 18n);
  });
});
