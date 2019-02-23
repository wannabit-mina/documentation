/*
 * This nodeJS script will check balances of the Deposit Box, and funds the specific
 * account/user has access to on the SKALE chain.
 *
 *  @param {String} account - Provide your account address.
 *  @param {String} Private SKALE testnet endpoint - provide the private SKALE testnet endpoint
 *  @param {String} SKALE Chain endpoint - provide your SKALE Chain endpoint
 */

const Web3 = require('web3');
const privateTestnetJson = require("./contracts/private_skale_testnet_proxy.json"); //this is the aws ABIs provided to you

let account = "[YOUR_ACCOUNT_ADDRESS]";
let privateSkaleTestnetEndpoint = "[PRIVATE_SKALE_TESTNET_ENDPOINT]";
let schainEndpoint = "[YOUR_SKALE_CHAIN_ENDPOINT]";

const depositBoxAddress = privateTestnetJson.deposit_box_address;

const web3PrivateTestnet = new Web3(new Web3.providers.HttpProvider(privateSkaleTestnetEndpoint));
const web3SkaleChain = new Web3(new Web3.providers.HttpProvider(schainEndpoint));

web3SkaleChain.eth.getBalance(account)
.then((balance) => { 
  console.log("SKALE Chain account: " + account)
  console.log("Balance: " + web3SkaleChain.utils.fromWei(balance, 'ether'))
});

web3PrivateTestnet.eth.getBalance(depositBoxAddress)
.then((balance) => { console.log("Balance in private SKALE testnet Deposit Box: " + 
    web3PrivateTestnet.utils.fromWei(balance, 'ether'))
});
