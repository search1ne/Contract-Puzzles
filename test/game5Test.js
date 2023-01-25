const { assert } = require('chai');

describe("Game5", function() {
  it("should be a winner", async function(){
    const Game = await ethers.getContractFactory("Game5");
    const game = await Game.deploy();

    // 1. Create a random wallet
    let wallet;
    let isBelowThreshold = false;
    while(!isBelowThreshold) {
      wallet = ethers.Wallet.createRandom().connect(ethers.provider);
      // 2. Check if the wallet address starts with 00
      if(wallet.address.slice(2,4) == '00') {
        isBelowThreshold = true;
      }
    }

    // 3. Get the main wallet from the provider
    const signer = ethers.provider.getSigner(0);
    // 4. Send some ether from the main wallet to the random wallet
    await signer.sendTransaction({
      to: wallet.address,
      value: ethers.utils.parseEther("1.0")
    })

    // 5. Call the win function on the contract using the random wallet
    await game.connect(wallet).win();
})
});