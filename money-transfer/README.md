


# Deploying to SKALE with Web3.js

Handling money transfers on the mainnet can be accomplished by calling two methods:


#### Deposit method

 This method is called from the SKALE Mainnet to "freeze" funds and move money into a safe Deposit Box.

```
function deposit(string schainID, address to) public payable {
  require(keccak256(abi.encodePacked(schainID)) != keccak256(abi.encodePacked("Mainnet")));
  require(tokenManagerAddresses[keccak256(abi.encodePacked(schainID))] != address(0));
  require(msg.value > 0);
  Proxy(proxyAddress).postOutgoingMessage(schainID, 
    tokenManagerAddresses[keccak256(abi.encodePacked(schainID))], msg.value, to);
}
```

#### Exit to Mainnet

 This method is called from the SKALE Chain to "release" funds and exit back to the end user.

```
function exitToMain(address to) public payable {
  require(msg.value > 0);
  ProxyForSchain(proxyForSchainAddress).postOutgoingMessage("Mainnet", 
    tokenManagerAddresses[keccak256(abi.encodePacked("Mainnet"))], msg.value, to);
}
```


**Learn More**
> **[SKALE Website](https://skalelabs.com/)**
> **[Developer Documentation](https://developers.skalelabs.com/)**

## Instructions

####  Install node packages

```
npm install
```  
   
#### Make a Deposit

Modify the `deposit.js` and add in your **account**, **private key**, and **SKALE Chain** information


Run the deposit script

```
node deposit.js
```

#### Exit

Modify the `exit.js` and add in your **account**, **private key**, and **SKALE Chain** information

Then add in your `schain_proxy.json` file into the `contracts` folder. The contents of this file should contain the address and ABI to the SKALE TokenManager contract deployed onto your SKALE Chain 

Run the deployment script

```
node exit.js
```
