// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IWDONK is IERC20 {
    function mint(address _to, uint256 _amount) external;
    function burn(address _from, uint256 _amount) external ;
}

contract BridgeBase is Ownable {
    address public tokenAddress;
    mapping (address => uint256) public pendingBalance;

    event Withdrawn(address indexed _to, uint256 _amount);
    event Burnt(address indexed burner, uint256 _amount);

    constructor(address _tokenAddress) Ownable(msg.sender) {
        tokenAddress = _tokenAddress;
    }

    function withdraw(IWDONK _tokenAddress, uint256 _amount) public {
        require(address(_tokenAddress) == tokenAddress);
        require(_amount > 0, "Amount must be greater than 0");
        require(pendingBalance[msg.sender] >= _amount);
        
        _tokenAddress.mint(msg.sender, _amount);
        pendingBalance[msg.sender] -= _amount;

        emit Withdrawn(msg.sender, _amount);
    }

    function burn(IWDONK _tokenAddress, uint256 _amount) public {
        require(_amount > 0, "Amount must be greater than 0");
        require(address(_tokenAddress) == tokenAddress, "Use only WDONK token to be burnt");
        require(_tokenAddress.balanceOf(msg.sender) >= _amount, "Insufficient balance to be burnt");
        
        _tokenAddress.burn(msg.sender, _amount);
        emit Burnt(msg.sender, _amount);
    }

    function burnedOnEthereum(address _userAcount, uint256 _amount) public onlyOwner {
        require(_amount > 0, "Amount must be greater than 0");
        pendingBalance[_userAcount] += _amount;
    }
}