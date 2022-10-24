const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {
    // Address of the whitelist contract that you deployed in the previous module
    const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
    // URL from where we can extract the metadata for a Crypto Dev NFT
    const metadataURL = METADATA_URL;
    /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so lunaContract here is a factory for instances of our CryptoDevs contract.
  */
    const lunaContract = await ethers.getContractFactory("Luna");

    // deploy the contract
    const deployedLunaContract = await lunaContract.deploy(
        metadataURL,
        whitelistContract
    );

    // print the address of the deployed contract
    console.log("Luna Contract Address:", deployedLunaContract.address);
}

// Call the main function and catch if there is any error
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
