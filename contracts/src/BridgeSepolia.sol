// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { ReentrancyGuard } from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/StorageSlot.sol";

contract BridgeSepolia is Ownable, ReentrancyGuard {
    mapping (address => bool) public whitelistedTokens;
    mapping (address => mapping (address => uint256)) public pendingBalance;
    mapping (address => mapping (address => uint256)) public nonces;
    mapping (bytes32 => bool) public consumedMessages;
    address public indexerAddress;
    bytes32 internal constant IMPLEMENTATION_SLOT = 0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc;

    event Deposit(address indexed _depositer, address indexed _tokenAddress, uint256 _amount, uint256 _nonce);

    modifier onlyIndexer() {
        require(msg.sender == indexerAddress);
        _;
    }

    constructor(address[] memory _whitelistedTokens, address _indexerAddress, address _implementation) Ownable(msg.sender) {
        uint i;
        for(i = 0; i<_whitelistedTokens.length; i++) {
            whitelistedTokens[_whitelistedTokens[i]] = true;
        }
        indexerAddress = _indexerAddress;
        setImplementation(_implementation);
    }
    
    function deposit(IERC20 _token, uint256 _amount) public nonReentrant {
        address tokenAddress = address(_token);
        require(whitelistedTokens[tokenAddress], "Token is not white listed token");
        require(_amount > 0, "Amount must be greater than 0");
        require(_token.allowance(msg.sender, address(this)) >= _amount, "Insufficient allowance");
        require(_token.transferFrom(msg.sender, address(this), _amount));
        uint256 nonce = nonces[msg.sender][tokenAddress]++;
        emit Deposit(msg.sender, tokenAddress, _amount, nonce);
    }

    function withdraw(IERC20 _token, uint256 _amount) public nonReentrant {
        address tokenAddress = address(_token);
        require(whitelistedTokens[tokenAddress], "Token is not white listed token");
        require(_amount > 0, "Amount must be greater than 0");
        require(_amount <= pendingBalance[msg.sender][tokenAddress], "Insufficient balance to be withdrawn");
        require(_token.transfer(msg.sender, _amount), "Withdraw failed, please try again later");
        pendingBalance[msg.sender][tokenAddress] -= _amount;
    }
    
    function burnedOnPolygon(address _userAddress, IERC20 _token, uint256 _amount, uint256 _nonce) public nonReentrant onlyIndexer {
        require(_amount > 0);
        address tokenAddress = address(_token);
        require(whitelistedTokens[tokenAddress], "Token must be whitelisted");
        bytes32 messageHash = keccak256(abi.encodePacked(_userAddress, tokenAddress, _amount, _nonce, "POLYGON_TO_SEPOLIA"));
        require(!consumedMessages[messageHash], "Already proccessed, can't double execute it.");
        consumedMessages[messageHash] = true;
        pendingBalance[_userAddress][tokenAddress] += _amount;
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

// Contract Address : 0x5adcDe83F629A788B4B323534AC9b5A782ad0e4a
// https://repo.sourcify.dev/11155111/0x5adcDe83F629A788B4B323534AC9b5A782ad0e4a
// Block Number : 10176561


// PREVIOUS : HUGE COINCIDENT
// Contract Address : 0xC3ea82d13f6Ccdb6d5B0B844acD300EFb20615CA
// https://repo.sourcify.dev/11155111/0xC3ea82d13f6Ccdb6d5B0B844acD300EFb20615CA

// Block Number : 10149922