// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract HelloWeb3{
    string public _string = "Hello Web3!";

    function mint() public view returns(string memory str) {
        str = _string;
    }
}
