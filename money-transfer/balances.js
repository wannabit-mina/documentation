/*
 * This nodeJS script will deposit funds into your SKALE Deposit Box.
 *
 *  @param {String} account - Provide your account address.
 *  @param {String} Private SKALE testnet endpoint - provide the private SKALE testnet endpoint
 *  @param {String} SKALE Chain endpoint - provide your SKALE Chain endpoint
 */

const Web3 = require('web3');
const mainnetJson = require("./contracts/mainnet_proxy.json");

let account = "[YOUR_ACCOUNT_ADDRESS]";
let privateSkaleTestnetEndpoint = "[PRIVATE_SKALE_TESTNET_ENDPOINT]";
let schainEndpoint = "[YOUR_SKALE_MAINNET_ENDPOINT]";

const depositBoxAddress = mainnetJson.deposit_box_address;
const abi = mainnetJson.deposit_box_abi;

const web3Mainnet = new Web3(new Web3.providers.HttpProvider(privateSkaleTestnetEndpoint));
const web3SkaleChain = new Web3(new Web3.providers.HttpProvider(schainEndpoint));

web3SkaleChain.eth.getBalance(account)
.then((balance) => { 
  console.log("SKALE Chain account: " + account)
  console.log("Balance: " + web3SkaleChain.utils.fromWei(balance, 'ether'))
});

web3Mainnet.eth.getBalance(depositBoxAddress)
.then((balance) => { console.log("Balance in Mainnet Deposit Box: " + 
    web3Mainnet.utils.fromWei(balance, 'ether'))
});
