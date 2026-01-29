// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

contract WOggy is ERC20, Ownable {
    constructor() ERC20("WOGGY","WOGY") Ownable(msg.sender) {
        
    }
    function mint(address _to, uint256 _amount) public onlyOwner {
        _mint(_to, _amount);
    }
    function burn(address _from, uint256 _amount) public onlyOwner {
        _burn(_from, _amount);
    }
}
// Contract Address : 0x4046Dd11d7cB25E010c87c2908d3A7705f4D0A13
// https://repo.sourcify.dev/80002/0x4046Dd11d7cB25E010c87c2908d3A7705f4D0A13