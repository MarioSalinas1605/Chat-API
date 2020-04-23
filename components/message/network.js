const express = require('express')
const router = express.Router()
const response = require('../../network/response')

router.get('/', (req, res) => {
    console.log(req.headers);
    res.header({"custom-header": "Nuestro custom header"})
    response.success(req, res, "Get ok", 200)
})

router.post('/', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    if (req.query.error) {
        response.error(req, res, "Post error", 404, 'This is a simulation')
    }else{
        response.success(req, res, "Post ok", 201)
    }
    
})

module.exports = router