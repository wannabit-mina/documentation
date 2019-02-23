/*
 * This nodeJS script will deposit funds into your SKALE Deposit Box.
 *
 *  @param {String} private key - Provide your private key.
 *  @param {String} account - Provide your account address.
 *  @param {String} Private SKALE testnet endpoint - provide the private SKALE testnet endpoint
 *  @param {String} SKALE Chain id - provide your SKALE Chain id
 */

const Web3 = require('web3');
const privateTestnetJson = require("./contracts/private_skale_testnet_proxy.json"); //this is the aws ABIs provided to you
const Tx = require('ethereumjs-tx');

let privateKey = new Buffer('[YOUR_PRIVATE_KEY]', 'hex')
let account = "[YOUR_ACCOUNT_ADDRESS]";
let privateSkaleTestnetEndpoint = "[PRIVATE_SKALE_TESTNET_ENDPOINT]";
let schainID = "[YOUR_SKALE_CHAIN_ID]";

const depositBoxAddress = privateTestnetJson.deposit_box_address;
const abi = privateTestnetJson.deposit_box_abi;

const web3 = new Web3(new Web3.providers.HttpProvider(privateSkaleTestnetEndpoint));

let contract = new web3.eth.Contract(abi, depositBoxAddress);

//prepare the smart contract function deposit(string schainID, address to)
let deposit = contract.methods.deposit(schainID, account).encodeABI();  

//get nonce
web3.eth.getTransactionCount(account).then(nonce => {
  
  //create raw transaction
  const rawTx = {
    from: account, 
    nonce: "0x" + nonce.toString(16),
    data : deposit,
    to: depositBoxAddress,
    gasPrice: 0,
    gas: 8000000,
    value: web3.utils.toHex(web3.utils.toWei('1', 'ether'))
  }

  //sign transaction
  const tx = new Tx(rawTx);
  tx.sign(privateKey);

  const serializedTx = tx.serialize();

  //send signed transaction
  web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).
    on('receipt', receipt => {
      console.log(receipt);
      web3.eth.getBalance(depositBoxAddress)
      .then((balance) => { console.log("Balance in Deposit Box: " + 
          web3.utils.fromWei(balance, 'ether'))
      });
   }).
    catch(console.error);
});
