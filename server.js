const express = require('express')
const router = express.Router()

const app = express()

app.use(express.json())
app.use(router)

router.get('/', (req, res) => {
    res.send('Hi from get')
})

router.post('/', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    res.send('Hi from post')
})

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
})