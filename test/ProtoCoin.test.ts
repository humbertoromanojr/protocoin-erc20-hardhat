import { expect } from "chai";
import { network } from "hardhat";

const { ethers } = await network.create();

describe("ProtoCoin", function () {
  it("Should ...", async function () {
    const contract = await ethers.deployContract("ProtoCoin");

    //await expect(contract.inc()).to.emit(contract, "contract").withArgs(1n);
  });
});
