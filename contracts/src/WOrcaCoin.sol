// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

contract WOrcaCoin is ERC20, Ownable {
    constructor() ERC20("WORCA", "WORC") Ownable(msg.sender) {

    }
    function mint(address _to, uint256 _amount) public onlyOwner {
        _mint(_to, _amount);
    }
    function burn(address _from, uint256 _amount) public onlyOwner {
        _burn(_from, _amount);
    }
}
// Contract Address : 0xe9DBb3Ac2DAFbF7745aFa3449A2e9366D6977B90
// https://repo.sourcify.dev/80002/0xe9DBb3Ac2DAFbF7745aFa3449A2e9366D6977B90