var DAO_Creator = artifacts.require("./DAO_Creator.sol");
module.exports = function(deployer,network) {
  deployer.deploy(DAO_Creator,{
    gas: 4700000
  });
};
