const express = require('express')
const multer = require('multer')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

const upload = multer({
    dest: 'public/files/'
})

router.get('/', async (req, res) => {
    const filterMessages = req.query.chat || null
    try {
        let messageList = await controller.getMessages(filterMessages)
        response.success(req, res, messageList, 200)
    } catch (error) {
        response.error(req, res, "Unexpected error", 500, error)
    }
})

router.post('/', upload.single('file'), async (req, res) => {
    console.log("[network] POST request body");
    console.log(req.body);
    try {
        let fullMessage = await controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
        response.success(req, res, fullMessage, 201)
    } catch (error) {
        response.error(req, res, "Post error", 400, 'Error in controller')
    }
})
router.patch('/:id', async (req, res) => {
    try {
        const data = await controller.updateMessage(req.params.id, req.body.message)
        response.success(req, res, data, 200)
    } catch (error) {
        response.error(req, res, 'Error interno', 500, error)
    }
})
router.delete('/:id', async (req, res) => {
    try {
        const data = await controller.deleteMessage(req.params.id)
        response.success(req, res, `User ${req.params.id} deleted`, 200)
    } catch (error) {
        response.error(req, res, 'Error interno', 500, error)
    }
})

module.exports = router