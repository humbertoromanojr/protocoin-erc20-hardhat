import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("ProtoCoinModule", (m) => {
  const protoCoin = m.contract("ProtoCoin");

  return { protoCoin };
});
