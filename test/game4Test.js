const { assert } = require('chai');

describe('Game4', function () {
  it('should be a winner', async function () {
    // 1. deploy the contract
    const Game = await ethers.getContractFactory('Game4');
    const game = await Game.deploy();

    // 2. get the signer address
    const signer = ethers.provider.getSigner(0);
    const address = await signer.getAddress();

    // 3. write to the mapping
    await game.write(address)

    // 4. win the game
    await game.win(address);

    // 5. leave this assertion as-is
    assert(await game.isWon(), 'You did not win the game');
  
  }) 
});