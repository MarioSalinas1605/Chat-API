const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

router.post('/', async (req, res) => {
    try {
        let data = await controller.addUser(req.body.name)
        response.success(req, res, data, 201)
    } catch (error) {
        response.error(req, res, 'Internal error', 500, error)
    }
})

router.get('/', async (req, res) => {
    try {
        let data = await controller.getUser()
        response.success(req, res, data, 200)
    } catch (error) {
        response.error(req, res, "Unexpected error", 500, error)
    }
})

module.exports = router