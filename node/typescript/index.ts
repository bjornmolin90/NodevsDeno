import { createServer, IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';
const bcrypt = require('bcryptjs');
const saltRounds = 16;
const pass = 'Passw0rd123!';
const host = 3000

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    const reqUrl = parse(req.url).pathname
    if (reqUrl == "/") {
        res.write('Hello World')
        res.end()
    }
    else if (reqUrl == "/pass") {
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(pass, salt, function(err, hash) {
                res.write(JSON.stringify(hash))
                res.end()
            });
        });
    }
    else if (reqUrl == "/small") {
        const small = require('../../data/small.json')
        res.write(JSON.stringify(small))
        res.end()
    }
    else if (reqUrl == "/medium") {
        const medium = require('../../data/medium.json')
        res.write(JSON.stringify(medium))
        res.end()
    }
    else if (reqUrl == "/big") {
        const big = require('../../data/big.json')
        res.write(JSON.stringify(big))
        res.end()
    }
})

server.listen(host)