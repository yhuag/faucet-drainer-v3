const express = require('express')
const app = express()
var Drain = require("./drain")
var ethereum_address = require('ethereum-address');

app.get('/', (req, res) => {
    res.send('To Earn Tokens: Change the URL to .../0x123456789your-address');
})

app.get('/:address', async (req, res) => {
    var address = req.params.address;

    if (ethereum_address.isAddress(address)) {
        res.send(await Drain.drainer(address));
    }
    else {
        res.send('Invalid Ethereum address: ' + address)
    }
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))