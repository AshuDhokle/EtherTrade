require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/1aw-axlOl2no39ZxJIeeS7KgrIHV-ExI',
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};