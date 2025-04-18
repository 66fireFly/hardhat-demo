require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      // url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_SEPOLIA_KEY}`,
      url: "https://sepolia.infura.io/v3/" + process.env.INFURA_ID,
      //  accounts: [SEPOLIA_PRIVATE_KEY],
      accounts: [`0x${process.env.PRIVATE_KEY}`],

      //   chainId: 11155111,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  sourcify: {
    enabled: true,
  },
};
