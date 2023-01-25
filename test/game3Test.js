const { assert } = require('chai');

describe('Game3', function () {
  it('should be a winner', async function () {
    // 1. Deploy the Game3 contract
    const Game = await ethers.getContractFactory('Game3');
    const game = await Game.deploy();

    // 2. Get the 3 signers required
    const signer1 = ethers.provider.getSigner(0);
    const signer2 = ethers.provider.getSigner(1);
    const signer3 = ethers.provider.getSigner(2);

    // 3. Get the signer addresses
    const address1 = await signer1.getAddress();
    const address2 = await signer2.getAddress();
    const address3 = await signer3.getAddress();

    // 4. Have each signer send 2, 3, and 1 wei to the Game3 contract
    await game.connect(signer1).buy({ value: '2' });
    await game.connect(signer2).buy({ value: '3' });
    await game.connect(signer3).buy({ value: '1' });

    // 5. Have the winner send the winner address to the Game3 contract
    await game.win(address1, address2, address3);

    // 6. Assert that the game has been won. leave as-is
    assert(await game.isWon(), 'You did not win the game');
  });
});