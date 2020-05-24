const express = require('express')
const routes = require('./network/routes')
const db = require('./db')
const app = express()

db('mongodb+srv://admin:4321@cluster0-mxwrf.mongodb.net/telegrom?retryWrites=true&w=majority')
app.use(express.json())
routes(app)

app.use('/app', express.static('public'))

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
})