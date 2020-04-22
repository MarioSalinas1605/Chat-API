const express = require('express')
const router = express.Router()

const response = require('./network/response')

const app = express()

app.use(express.json())
app.use(router)

router.get('/', (req, res) => {
    console.log(req.headers);
    res.header({"custom-header": "Nuestro custom header"})
    response.success(req, res, "Get ok", 200)
})

router.post('/', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    if (req.query.error) {
        response.error(req, res, "Post error simulation", 404)
    }else{
        response.success(req, res, "Post ok", 201)
    }
    
})

app.use('/app', express.static('public'))

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
})