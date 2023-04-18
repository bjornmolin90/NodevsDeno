import { createServer, IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';
const host = 3000

// Make our HTTP server
const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    // Set our header
    res.setHeader("Access-Control-Allow-Origin", "*")
    // Parse the request url
    const reqUrl = parse(req.url).pathname
    // Compare our request method
    if (req.method == "GET") {
        if (reqUrl == "/small") {
            const small = require('../../data/small.json')
            res.write('JSON.stringify(small)')
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
    } else if (req.method == "POST") {
        if (reqUrl == "/hello") {
            res.write("hello world")
            res.end()
        }
    }
})

server.listen(host, () => {
    console.log(`Example app listening on port ${host}`)
  })