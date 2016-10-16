# Blocklab Token

[Contract Address](https://etherscan.io/address/0xe47014f16c55ddd3add5b68b951e10fcea7da686)

## ABI

```json
[ { "constant": false, "inputs": [ { "name": "receiver", "type": "address" }, { "name": "amount", "type": "uint256" } ], "name": "sendCoin", "outputs": [ { "name": "sufficient", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "addr", "type": "address" } ], "name": "getBalance", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "type": "function" }, { "inputs": [], "type": "constructor" }, { "payable": false, "type": "fallback" } ]
```

# Requirements

    npm install -g truffle ethereumjs-testrpc
    
# Run

Have testrpc running on localhost port 8545

Deploy contract to localhost chain via

    truffle migrate

Start up the webapp via

    truffle serve
