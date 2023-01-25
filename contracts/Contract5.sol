// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract Game5 {
  bool public isWon;

  address threshold = 0x00FfFFfFFFfFFFFFfFfFfffFFFfffFfFffFfFFFf;

  function win() external {
    // Check that the sender is below the threshold
    require(bytes20(msg.sender) < bytes20(threshold), "Nope. Try again!");

    // Set the isWon variable to true
    isWon = true;
  }
}