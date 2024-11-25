const ERC20 = artifacts.require("Lememe");
module.exports = function(deployer) {
  deployer.deploy(ERC20,10000000);
};