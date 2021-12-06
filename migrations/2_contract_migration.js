const HodlContract = artifacts.require("Hodl");

module.exports = async function(deployer) {
    await deployer.deploy(HodlContract)
}