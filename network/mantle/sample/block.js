const { ethers } = require('ethers');

// Connect to Ganache
const provider = new ethers.JsonRpcProvider('http://127.0.0.1:8545');

// Specify the block number
const blockNumber = 0; // Replace with the desired block number

// Get block details
provider.getBlock(blockNumber)
  .then(block => {
    console.log(block);
    console.log(`Block Hash: ${block.hash}`);
  })
  .catch(error => {
    console.error(`Error fetching block: ${error}`);
  });