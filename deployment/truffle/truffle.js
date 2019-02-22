/*
 * This truffle script will deploy your smart contracts to your new S-Chain.
 * Learm more @ https://developers.skalelabs.com 
 *
 *  @param {String} mnemonic - Provide your MetaMask seed words.
 *  @param {String} privateKey - Provide your Private Key.
 *  @param {String} provider - Provide the IP address and JSON RPC port to your schain.
 */

// HDWalletProvider uses MetaMask to sign the smart contract deployment transaction
let HDWalletProvider = require("truffle-hdwallet-provider");
let mnemonic = "[YOUR_METAMASK_SEED_WORDS]";

// PrivateKeyProvider uses your private key sign the smart contract deployment transaction
let PrivateKeyProvider = require("truffle-privatekey-provider");
let privateKey = "[YOUR_PRIVATE_KEY]";

module.exports = {
    networks: {
        hd_wallet: {
            provider: new HDWalletProvider(mnemonic, "[YOUR_SCHAIN_IP_ADDRESS_AND_PORT]"),
            gasPrice: 0,
            network_id: "*"
        },
        private_key: {
            provider: new PrivateKeyProvider(privateKey, "[YOUR_SCHAIN_IP_ADDRESS_AND_PORT]"),
            gasPrice: 0,
            network_id: "*"
        }
    }
}
