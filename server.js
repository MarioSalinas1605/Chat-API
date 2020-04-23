const express = require('express')
const routes = require('./network/routes')

const app = express()

app.use(express.json())
routes(app)

app.use('/app', express.static('public'))

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
})