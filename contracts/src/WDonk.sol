// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

contract WDonk is ERC20, Ownable {
    constructor() ERC20("WDONK","WDONK") Ownable(msg.sender) {
        
    }
    function mint(address _to, uint256 _amount) public onlyOwner {
        _mint(_to, _amount);
    }
    function burn(address _from, uint256 _amount) public onlyOwner {
        _burn(_from, _amount);
    }
}
// Contract Address : 0x5f1953C1e7492504F59D6Ada076b0E2Ef8bBb8D6
// https://repo.sourcify.dev/80002/0x5f1953C1e7492504F59D6Ada076b0E2Ef8bBb8D6