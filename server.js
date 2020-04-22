const express = require('express')

const app = express()

app.use('/', (request, response) => {
    response.send('Hi')
})

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
})