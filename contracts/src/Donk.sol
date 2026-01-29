// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

contract Donk is ERC20, Ownable {
    constructor() ERC20("DONK","DONK") Ownable(msg.sender) {
        _mint(msg.sender, 100000 * (10 ** decimals()));
    }
    function mint(address _to, uint256 _amount) public onlyOwner {
        _mint(_to, _amount);
    }
    function purchase() public payable {
        require(msg.value > 0, "Amount must be greater than 0");
        _mint(msg.sender, msg.value * 898);
    }
}
// Contract Address : 0x25708397c208a0db9B29CEF0B82bfA53857D18E2
// https://eth-sepolia.blockscout.com/address/0x25708397c208a0db9B29CEF0B82bfA53857D18E2?tab=contract