const mongoose = require('mongoose')
const db = mongoose.connection
const Model = require('./model')

mongoose.Promise = global.Promise
const mongoURI = 'mongodb+srv://admin:4321@cluster0-mxwrf.mongodb.net/telegrom?retryWrites=true&w=majority'
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
db.on('error', console.error.bind(console, '[db] connection error:'));
db.once('open', () => console.log(`[db] Successful connection`));

async function addMessage(message) {
    console.log('[store] Saving message');
    const myMessage = new Model(message)
    await myMessage.save()
}

async function getMessages() {
    const messages = await Model.find()
    return messages
}

async function updateText(id, message) {
    const foundMessage = await Model.findOne({_id: id})
    foundMessage.message = message
    const newMessage = await foundMessage.save()   
    return newMessage
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText
}