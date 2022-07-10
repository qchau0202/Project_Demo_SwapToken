require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/VA4qpICXJ_TEmAFl03JWSXgZhhOjifWf",
      accounts: [
        "b9b447290e9d28677ba6625f7031b80e3ee5ef34609adae1dcf1a3a6efd91c32",
      ],
    },
    hardhat: {
      accounts: [
        {
          privateKey:
            "b9b447290e9d28677ba6625f7031b80e3ee5ef34609adae1dcf1a3a6efd91c32",
          balance: "10000000000000000000000",
        },
      ],
    },
  },
};
