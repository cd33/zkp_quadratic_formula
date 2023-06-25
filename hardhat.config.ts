import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-circom";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  circom: {
    inputBasePath: "./circuits",
    ptau: "./powersOfTau28_hez_final_15.ptau",
    circuits: [
      {
        name: "quadratic",
      },
    ],
  },
};

export default config;
