const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

router.post('/', async (req, res) => {
    try {
        let data = await controller.addChat(req.body.users)
        response.success(req, res, data, 201)
    } catch (error) {
        response.error(req, res, 'Internal error', 500, error)
    }
})

router.get('/:userId', async (req, res) => {
    try {
        let data = await controller.getChat(req.params.userId)
        response.success(req, res, data, 200)
    } catch (error) {
        response.error(error)
    }
})

module.exports = router