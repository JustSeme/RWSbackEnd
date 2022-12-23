const http = require('http')
const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const app = express()

let requestsCounter = 0

app.use(express.static(path.join(__dirname)))
app.use(favicon(path.join(__dirname, 'favicon.ico')))

const server = http.createServer((request, response) => {
    switch (request.url) {
        case '/':
        case '/students':
            response.write('Hey students! You call me ' + requestsCounter + ' times')
            break
        case '/courses':
            response.write('Courses list')
            break
        default:
            response.write('404 not found')
            break
    }
    requestsCounter++

    response.end()


})

server.listen(3003)