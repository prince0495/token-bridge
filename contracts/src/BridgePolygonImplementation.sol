// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IWrappedToken is IERC20 {
    function mint(address _to, uint256 _amount) external;
    function burn(address _from, uint256 _amount) external;
}

contract BridgePolygonImplementation {
    address private _owner;                
    uint256 private _status;          
    mapping(address => bool) public whitelistedTokens;             
    mapping(address => mapping(address => uint256)) public pendingBalance;
    mapping(address => mapping(address => uint256)) public nonces;   
    mapping(bytes32 => bool) public consumedMessages;               
    address public indexerAddress;                                 

    event Withdrawn(address indexed to, address indexed token, uint256 amount);
    event Burnt(address indexed burner, address indexed token, uint256 amount, uint256 nonce);

    modifier onlyOwner() {
        require(msg.sender == _owner, "Not owner");
        _;
    }

    modifier nonReentrant() {
        require(_status != 2, "Reentrant call");
        _status = 2;
        _;
        _status = 1;
    }

    modifier onlyIndexer() {
        require(msg.sender == indexerAddress, "Not indexer");
        _;
    }

    function addInFuture() public view {
        
    }
}


// Contract Address : 0x2171cF35f07D20F515D5955E7547Cf2bD6c21e89
// https://repo.sourcify.dev/80002/0x2171cF35f07D20F515D5955E7547Cf2bD6c21e89
// Block : 33203395