const express = require('express')
const app = express()

app.get('/api/info', (req, res) => {
    res.json({
        name: 'test',
        age: 11,
        msg: 'sfhoaisjdfoiajsofjaosdfjasif'
    })
})

app.listen('8001')