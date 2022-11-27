const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { BigNumber } = ethers;

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
      expect(await swapTools.tick(1_000_000)).to.equal(138162);
    });

    it("Should return correct tick for price with 18 decimals", async function () {
      const { swapTools } = await loadFixture(deploySwapTools);
      const someBigNumberish = `1${"0".repeat(18)}`;
      expect(await swapTools.tick(BigNumber.from(someBigNumberish))).to.equal(414486);
    });

    it("Should return correct tick for price 10 000", async function () {
      const { swapTools } = await loadFixture(deploySwapTools);
      expect(await swapTools.tick(10_000)).to.equal(92108);
    });
  });
});
