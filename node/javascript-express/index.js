const express = require('express')
const app = express()
const port = 3000
const bcrypt = require('bcrypt');
const saltRounds = 16;
const pass = 'Passw0rd123!';

app.get('/', (req, res) => {
    res.send('Hello World')
})
app.get('/pass', (req, res) => {
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(pass, salt, function(err, hash) {
            res.json(hash)
        });
    });
})
app.get('/small', (req, res) => {
    const data = require('../../data/small.json')
    res.json(data)
})

app.get('/medium', (req, res) => {
    const data = require('../../data/medium.json')
    res.json(data)
})

app.get('/big', (req, res) => {
    const data = require('../../data/big.json')
    res.json(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})