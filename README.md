


# SKALE Documentation Code Examples

SKALE is an open-source, fully decentralized, layer 2 scaling network. Nodes in the SKALE Network are placed into SKALE chains (S-chains) in a random, cryptographically secure manner. The nodes work together to run a fast, asynchronous consensus with fast finality. S-chains are capable of performing state updates by messaging each other and the main Ethereum chain using BLS threshold signatures. The result is a decentralized, cost-effective, secure, and easy to use layer 2 scaling environment.

 
**Learn More**
> **[SKALE Website](https://skalelabs.com/)** <br/>
> **[Developer Documentation](https://developers.skalelabs.com/)**

# Deploying to SKALE

Deploying to SKALE is similar to deploying to the Ethereum blockchain. There are a few changes you will need to make within your existing deployment scripts. When using these code samples, please be sure to modify the code appropriately before running anything in production!

LANGUAGE | CODE EXAMPLE | DOCUMENTATION |
--- | --- |:---  | 
Truffle | [truffle.js](deployment/truffle) | [Truffle Deployment Documentation](https://developers.skalelabs.com/code-samples#truffle-deployment ) |
Web3-js | [web3.js](deployment/web3-js) | [Truffle JS Deployment Documentation](https://developers.skalelabs.com/code-samples#node-deployment ) 

# Money Transfer Agent

Handling token and message transfers between the private SKALE devnet and your SKALE chain can be accomplished by a combination of the smart contract methods available on your SKALE Chain.

Type | CODE EXAMPLE | 
--- |:---  | 
ETH | [ETH Token Management](money-transfer) |
ERC20 | [ERC20 Token Management](money-transfer) | 
