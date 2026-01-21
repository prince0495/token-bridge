// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract BridgeETH is Ownable {
    address public tokenAddress;
    mapping (address => uint256) public pendingBalance;

    event Deposit(address indexed depositer, uint256 amount);

    constructor(address _tokenAddress) Ownable(msg.sender) {
        tokenAddress = _tokenAddress;
    }

    function deposit(IERC20 _tokenAddress, uint256 _amount) public {
        require(address(_tokenAddress) == tokenAddress);
        require(_amount > 0, "Amount must be greater than 0");
        require(_tokenAddress.allowance(msg.sender, address(this)) >= _amount, "Insufficient allowance");
        require(_tokenAddress.transferFrom(msg.sender, address(this), _amount));

        emit Deposit(msg.sender, _amount);
    }

    function withdraw(IERC20 _tokenAddress, uint256 _amount) public {
        require(tokenAddress == address(_tokenAddress));
        require(_amount > 0, "Amount must be greater than 0");
        require(_amount <= pendingBalance[msg.sender]);
        _tokenAddress.transfer(msg.sender, _amount);
        pendingBalance[msg.sender] -= _amount;
    }

    function burnedOnBase(address _userAccount, uint256 _amount) external onlyOwner {
        require(_amount > 0, "Amount should be greater than 0");
        pendingBalance[_userAccount] += _amount;
    }
}