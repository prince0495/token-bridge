// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { ReentrancyGuard } from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/StorageSlot.sol";

contract BridgeSepolia is Ownable, ReentrancyGuard {
    address public tokenAddress;
    address public indexerAddress;
    mapping (address => uint256) public pendingBalance;
    bytes32 internal constant IMPLEMENTATION_SLOT = 0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc;

    event Deposit(address indexed depositer, uint256 amount);

    modifier onlyIndexer() {
        require(msg.sender == indexerAddress);
        _;
    }

    constructor(address _tokenAddress, address _indexerAddress, address _implementation) Ownable(msg.sender) {
        tokenAddress = _tokenAddress;
        indexerAddress = _indexerAddress;
        
    }
    
    function deposit(IERC20 _tokenAddress, uint256 _amount) public {
        require(address(_tokenAddress) == tokenAddress);
        require(_amount > 0, "Amount must be greater than 0");
        require(_tokenAddress.allowance(msg.sender, address(this)) >= _amount, "Insufficient allowance");
        require(_tokenAddress.transferFrom(msg.sender, address(this), _amount));
        emit Deposit(msg.sender, _amount);
    }

    function withdraw(IERC20 _tokenAddress, uint256 _amount) public nonReentrant {
        require(address(_tokenAddress) == tokenAddress);
        require(_amount > 0);
        require(_amount <= pendingBalance[msg.sender]);
        pendingBalance[msg.sender] -= _amount;
        _tokenAddress.transfer(msg.sender, _amount);
    }
    
    function burnedOnPolygon(address _userAddress, uint256 _amount) public nonReentrant onlyIndexer {
        require(_amount > 0);
        pendingBalance[_userAddress] += _amount;
    }

    function getImplementation() public view returns(address) {
        return StorageSlot.getAddressSlot(IMPLEMENTATION_SLOT).value;
    }
    
    function setImplementation(address _implementation) public onlyOwner {
        StorageSlot.getAddressSlot(IMPLEMENTATION_SLOT).value = _implementation;
    }

    fallback() external {
        (bool success, ) = getImplementation().delegatecall(msg.data);
        if(!success) {
            revert();
        }
    }
}