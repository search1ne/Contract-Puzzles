const { assert } = require('chai');
const { ethers } = require('hardhat');

describe('Game2', function () {
  it('should be a winner', async function () {
    // 1. Deploy the contract
    const Game = await ethers.getContractFactory('Game2');
    const game = await Game.deploy();
   
    // 2. Switch on the keys
    await game.switchOn(20);
    await game.switchOn(47);
    await game.switchOn(212);

    // 3. Win the game
    await game.win();

    // 4. leave assertion as-is
    assert(await game.isWon(), 'You did not win the game');
  });  
});
