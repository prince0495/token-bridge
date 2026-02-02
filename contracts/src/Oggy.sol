// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

contract Oggy is ERC20, Ownable {
    constructor() ERC20("OGGY","OGY") Ownable(msg.sender) {
        _mint(msg.sender, 100000 * (10 ** decimals()));
    }
    function mint(address _to, uint256 _amount) public onlyOwner {
        _mint(_to, _amount);
    }
    function purchase() public payable {
        require(msg.value > 0, "Amount must be greater than 0");
        _mint(msg.sender, msg.value * 898);
    }
    function withdrawFees() public onlyOwner {
        (bool success, ) = payable(msg.sender).call{value: address(this).balance}("");
        require(success, "Fees withdrawal failed!");
    }
}

// Deployed At : 0x163FDA0d468e48C3B79bBcb8d59C546F445E8984
// https://repo.sourcify.dev/11155111/0x163FDA0d468e48C3B79bBcb8d59C546F445E8984