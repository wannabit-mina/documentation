/*
 * This nodeJS script will allow you to remove funds from the Deposit Box..
 *
 *  @param {String} private key - Provide your private key.
 *  @param {String} account - Provide your account address.
 *  @param {String} SKALE Chain endpoint - provide your SKALE Chain endpoint
 *  @param {String} SKALE Chain id - provide your SKALE Chain id
 */

const Web3 = require('web3');
const schainJson = require("./contracts/schain_proxy.json"); //this is the schain ABIs provided to you

const Tx = require('ethereumjs-tx');

let privateKey = new Buffer('[YOUR_PRIVATE_KEY]', 'hex')
let account = "[YOUR_ACCOUNT_ADDRESS]";
let schainEndpoint = "[YOUR_SKALE_CHAIN_ENDPOINT]";

const tokenManagerAddress = schainJson.token_manager_address;
const abi = schainJson.token_manager_abi;

const web3 = new Web3(new Web3.providers.HttpProvider(schainEndpoint));

let contract = new web3.eth.Contract(abi, tokenManagerAddress);

//prepare the smart contract function exitToMain(address to)
let exitToMain = contract.methods.exitToMain(account).encodeABI();  

web3.eth.getTransactionCount(account).then(nonce => {
  const rawTx = {
    nonce: nonce,
    from: account, 
    nonce: "0x" + nonce.toString(16),
    data : exitToMain,
    to: tokenManagerAddress,
    gasPrice: 0,
    gas: 8000000,
    value: web3.utils.toHex(web3.utils.toWei('1', 'ether'))
  }

  const tx = new Tx(rawTx);
  tx.sign(privateKey);

const serializedTx = tx.serialize();

  //send signed transaction
  web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).
    on('receipt', receipt => {
      console.log(receipt);
      web3.eth.getBalance(account)
      .then((balance) => { console.log("Balance on SKALE Chain: " + 
          web3.utils.fromWei(balance, 'ether'))
      });
   }).
    catch(console.error);
});
