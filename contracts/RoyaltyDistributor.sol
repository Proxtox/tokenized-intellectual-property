// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title Royalty Distributor
contract RoyaltyDistributor {
    address public admin;

    constructor() {
        admin = msg.sender;
    }

    function distribute(bytes32 ipId) external {
        require(msg.sender == admin, "Only admin");
        // Distribution logic would go here
    }
}