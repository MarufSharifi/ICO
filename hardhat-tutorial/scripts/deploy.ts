import { ethers } from "hardhat";
import dotenv from 'dotenv';
import {CRYPTO_DEVS_NFT_CONTRACT_ADDRESS} from '../constants';


dotenv.config({path: ".env"});


async function main() {

    const cryptoDevsNftContract = CRYPTO_DEVS_NFT_CONTRACT_ADDRESS;


    const CryptoDevTokenContract = await ethers.getContractFactory('CryptoDevToken');

    const deployedCryptoDevContractAddress = await CryptoDevTokenContract.deploy(cryptoDevsNftContract);

    await deployedCryptoDevContractAddress.deployed();


    console.log('Crypto Devs Token Contract Address:', deployedCryptoDevContractAddress.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1)
});
