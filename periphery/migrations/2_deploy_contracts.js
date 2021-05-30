const Router = artifacts.require('PancakeRouter.sol');
const WBNB = artifacts.require('WBNB.sol');

module.exports = async function (deployer, _network) {
  let wbnb;
  // test development factory address
  const FACTORY_ADDRESS = '0x8De8c00fCd95594F3D94D98F9612CE339cc3fB90';

  if (_network === 'mainnet') {
    // mainnet wbnb contract address
    wbnb = await WBNB.at('0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c');
  } else {
    await deployer.deploy(WBNB);
    wbnb = await WBNB.deployed();
  }

  await deployer.deploy(Router, FACTORY_ADDRESS, wbnb.address);
};
