const express = require('express')
import { Express, Request, Response } from 'express';
const bcrypt = require('bcryptjs');
const app: Express = express();
const port = 3000;
const saltRounds = 16;
const pass = 'Passw0rd123!';

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

app.get('/pass', (req: Request, res: Response) => {
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(pass, salt, function(err, hash) {
            res.json(hash)
        });
    });
});

app.get('/small', (req: Request, res: Response) => {
    const small = require('../../data/small')
    res.send(JSON.stringify(small));
});

app.get('/medium', (req: Request, res: Response) => {
    const medium = require('../../data/medium')
    res.send(JSON.stringify(medium));
});
app.get('/big', (req: Request, res: Response) => {
    const big = require('../../data/big')
    res.send(JSON.stringify(big));
});

app.listen(port);