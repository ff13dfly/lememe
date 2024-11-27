
/*ERC20 smart contract*/
// const ERC20 = artifacts.require("Lememe");
// module.exports = function(deployer) {
//   deployer.deploy(ERC20,10000000);
// };

// /*Test demo*/
// const hello = artifacts.require("HelloWeb3");
// module.exports = function(deployer) {
//   deployer.deploy(hello,20000000);
// };

/*Test demo*/
const abc = artifacts.require("ERC20Demo");
module.exports = function(deployer) {
  deployer.deploy(abc,"lememe","LMM");
};