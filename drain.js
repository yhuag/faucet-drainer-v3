var request = require("request");
var MAX_TRIAL = 1000;

function Options(_address) {
    var options = { method: 'POST',
        url: 'https://faucet.metamask.io/',
        headers: 
        {   'Cache-Control': 'no-cache',
            'Content-Length': '42',
            Connection: 'keep-alive',
            Cookie: '_ga=GA1.2.961283661.1521136489',
            Referer: 'https://faucet.metamask.io/',
            Accept: '*/*',
            'Content-Type': 'application/rawdata',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
            'Accept-Language': 'en-US,en;q=0.9,zh-TW;q=0.8,zh;q=0.7,zh-CN;q=0.6',
            Host: 'faucet.metamask.io',
            'Accept-Encoding': 'gzip, deflate, br',
            Origin: 'https://faucet.metamask.io' },
        body: _address };
    return options;
}

function drainer(_address) {
    for (var i=0;i<MAX_TRIAL;i++){
        request(Options(_address), function (error, response, body) {
            if (error) throw new Error(error);
            console.log(body);
        });
    }
}

if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " ADDRESS");
    process.exit(-1);
}

var address = process.argv[2];
console.log('To: ' + address);
drainer(address);
