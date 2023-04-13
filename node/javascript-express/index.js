const express = require('express')
const app = express()
const port = 3000

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