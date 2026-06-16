import { network } from "hardhat";

const { ethers } = await network.create();

const ProtoCoin = await ethers.getContractFactory("ProtoCoin");
const protoCoin = await ProtoCoin.deploy();

await protoCoin.waitForDeployment();
console.log(`Contract deployed at ${protoCoin.target}`);
