const express = require('express')
const app = express()
const server = require('http').Server(app)

const routes = require('./network/routes')
const db = require('./db')
const socket = require('./socket')


db('mongodb+srv://admin:4321@cluster0-mxwrf.mongodb.net/telegrom?retryWrites=true&w=majority')

app.use(express.json())
socket.connect(server)

routes(app)

app.use('/app', express.static('public'))

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
})