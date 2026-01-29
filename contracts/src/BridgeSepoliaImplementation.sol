// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract BridgeSepoliaImplementation {
    address private _owner;
    uint256 private _status;
    mapping (address => bool) public whitelistedTokens;
    mapping (address => mapping (address => uint256)) public pendingBalance;
    mapping (address => mapping (address => uint256)) public nonces;
    mapping (bytes32 => bool) public consumedMessages;
    address public indexerAddress;

    event Deposit(address indexed _depositer, address indexed _tokenAddress, uint256 _amount, uint256 _nonce);

    function addInFuture() public view {
        
    }
}
// Contract Address : 0xA2aA3335A1FE6Dbe76e4b645cF37C6C2425d011E
// https://repo.sourcify.dev/11155111/0xA2aA3335A1FE6Dbe76e4b645cF37C6C2425d011E