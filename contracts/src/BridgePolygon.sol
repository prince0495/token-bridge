// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { ReentrancyGuard } from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/StorageSlot.sol";

interface IWrappedToken is IERC20 {
    function mint(address _to, uint256 _amount) external;
    function burn(address _from, uint256 _amount) external ;
}

contract BridgePolygon is Ownable, ReentrancyGuard {
    mapping (address => bool) public whitelistedTokens;
    mapping (address => mapping (address => uint256)) public pendingBalance;
    mapping (address => mapping (address => uint256)) public nonces;
    mapping (bytes32 => bool) public consumedMessages;
    address public indexerAddress;

    bytes32 internal constant IMPLEMENTATION_SLOT = 0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc;

    event Withdrawn(address indexed _to, address indexed _tokenAddress, uint256 _amount);
    event Burnt(address indexed _burner, address indexed _tokenAddress, uint256 _amount, uint256 _nonce);

    modifier onlyIndexer() {
        require(msg.sender == indexerAddress);
        _;
    }

    constructor(address[] memory _whitelistedTokens, address _indexerAddress, address _implementation) Ownable(msg.sender) {
        uint i;
        for(i = 0; i < _whitelistedTokens.length; i++) {
            whitelistedTokens[_whitelistedTokens[i]] = true;
        }
        indexerAddress = _indexerAddress;
        setImplementation(_implementation);
    }

    function withdraw(IWrappedToken _token, uint256 _amount) public nonReentrant {
        address tokenAddress = address(_token);
        require(whitelistedTokens[tokenAddress], "Token must be whitelisted");
        require(_amount > 0, "Amount must be greater than 0");
        require(pendingBalance[msg.sender][tokenAddress] >= _amount, "Insufficient amount to be withdrawn");
        
        _token.mint(msg.sender, _amount);
        pendingBalance[msg.sender][tokenAddress] -= _amount;

        emit Withdrawn(msg.sender, tokenAddress, _amount);
    }

    function burn(IWrappedToken _token, uint256 _amount) public {
        address tokenAddress = address(_token);
        require(_amount > 0, "Amount must be greater than 0");
        require(whitelistedTokens[tokenAddress], "Token must be whitelisted");
        require(_token.balanceOf(msg.sender) >= _amount, "Insufficient balance to be burnt");
        _token.burn(msg.sender, _amount);
        uint256 nonce = nonces[msg.sender][tokenAddress]++;
        emit Burnt(msg.sender, tokenAddress, _amount, nonce);
    }

    function depositedOnSepolia(address _userAddress, IWrappedToken _token, uint256 _amount, uint256 _nonce) public nonReentrant onlyIndexer {
        require(_amount > 0, "Amount must be greater than 0");
        address tokenAddress = address(_token);
        require(whitelistedTokens[tokenAddress], "Token must be whitelisted");
        bytes32 messageHash = keccak256(
            abi.encodePacked(_userAddress, tokenAddress, _amount, _nonce, "SEPOLIA_TO_POLYGON")
        );
        require(!consumedMessages[messageHash], "Already proccessed, can't double execute it.");
        consumedMessages[messageHash] = true;
        pendingBalance[_userAddress][address(_token)] += _amount;
    }

    function getImplementation() public view returns (address) {
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

// Contract Address : 0xA10816A6ddBD6Bd365A63F7ebAe1dFEE020039c5
// https://repo.sourcify.dev/80002/0xA10816A6ddBD6Bd365A63F7ebAe1dFEE020039c5
// Block Number : 33203571





// PREVIOUS: HUGE COINCIDENT
// Contructor : [0x07cA887B4e94101Bd7CF12cd32E26A9E0Aa621cb,0x4046Dd11d7cB25E010c87c2908d3A7705f4D0A13,0xe9DBb3Ac2DAFbF7745aFa3449A2e9366D6977B90],0x257C9BFBd67c60a30444B5d7581d74D1741CCB53,0xD26F79B67A2E95A915EA0458c15E9DF804035328

// Contract Address : 0xC3ea82d13f6Ccdb6d5B0B844acD300EFb20615CA

// https://repo.sourcify.dev/80002/0xC3ea82d13f6Ccdb6d5B0B844acD300EFb20615CA

// Block Number : 33035925