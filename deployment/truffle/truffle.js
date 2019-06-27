/*
 * This truffle script will deploy your smart contracts to your new S-Chain.
 *
 *  @param {String} privateKey - Provide your wallet private key.
 *  @param {String} provider - Provide your SKALE endpoint address.
 */

require('dotenv').config();
let HDWalletProvider = require("truffle-hdwallet-provider");

//https://developers.skalelabs.com for SKALE documentation
//Provide your wallet private key
let privateKey = [YOUR_PRIVATE_KEY];

//Provide your SKALE endpoint address
let skale = [YOUR_SKALE_CHAIN_ENDPOINT];

module.exports = {
    networks: {
        ganache: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*"
        },
        skale: {
            provider: () => new HDWalletProvider(privateKey, skale),
            gasPrice: 0,
            network_id: "*"
        }
    }
}
