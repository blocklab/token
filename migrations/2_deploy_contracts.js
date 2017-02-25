var BlocklabTokenV1 = artifacts.require("./BlocklabTokenV1.sol");

module.exports = function(deployer) {
  deployer.deploy(BlocklabTokenV1);
};
