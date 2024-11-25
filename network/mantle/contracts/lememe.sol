// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// Importing OpenZeppelin's ERC20 implementation
// npm install @openzeppelin/contracts
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// Define the test Lememe token contract
// For local env testing.
contract Lememe is ERC20 {
    // Constructor function to initialize the token with a name and symbol
    constructor(uint256 initialSupply) ERC20("Lememe", "LMM") {
        // Mint the initial supply of tokens to the deployer's address
        _mint(msg.sender, initialSupply * (20000000 ** decimals()));
    }
}