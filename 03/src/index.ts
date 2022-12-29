import express from 'express'

const app = express()
const port = 3003

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/samurais', (req, res) => {
    const a = 4
    if (a > 5) {
        res.send('OK')
    } else {
        res.send('Hello, samurais!')
    }
})

app.post('/samurais', (req, res) => {
    const response = {
        data: {
            message: 'We have created samurai'
        },
        statusCode: 0
    }
    res.send(JSON.stringify(response))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})