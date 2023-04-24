const http = require("http");
const url = require("url");

// Make our HTTP server
const server = http.createServer((req, res) => {
    // Set our header
    res.setHeader("Access-Control-Allow-Origin", "*")
    // Parse the request url
    const reqUrl = url.parse(req.url).pathname
    // Compare our request method
    if (req.method == "GET") {
        if (reqUrl == "/") {
            res.write('Hello World')
            res.end()
        }
        if (reqUrl == "/small") {
            const small = require('../../data/small.json')
            res.write(JSON.stringify(small))
            res.end()
        }
        if (reqUrl == "/medium") {
            const medium = require('../../data/medium.json')
            res.write(JSON.stringify(medium))
            res.end()
        }
        if (reqUrl == "/big") {
            const big = require('../../data/big.json')
            res.write(JSON.stringify(big))
            res.end()
        }
    }
})

server.listen(3000)