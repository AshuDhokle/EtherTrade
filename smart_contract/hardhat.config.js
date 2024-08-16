require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/1aw-axlOl2no39ZxJIeeS7KgrIHV-ExI',
      accounts: ['edb3191d8fc589b8c2dd1ed6ee03282bd8346bbbe6ded3e91c9f02f16bc3411e'],
    },
  },
};