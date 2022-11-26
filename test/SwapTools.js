const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("SwapTools", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deploySwapTools() {
    const SwapTools = await ethers.getContractFactory("SwapTools");
    const swapTools = await SwapTools.deploy();

    return { swapTools };
  }

  describe("Tick", function () {
    it("Should return correct tick", async function () {
      const { swapTools } = await loadFixture(deploySwapTools);
      expect(await swapTools.tick(1e6)).to.equal(138162);
    });
  });
});