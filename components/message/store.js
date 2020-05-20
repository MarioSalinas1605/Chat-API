const mongoose = require('mongoose')
const db = mongoose.connection
const Model = require('./model')

mongoose.Promise = global.Promise
const mongoURI = 'mongodb+srv://admin:4321@cluster0-mxwrf.mongodb.net/telegrom?retryWrites=true&w=majority'
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
db.on('error', console.error.bind(console, '[db] connection error:'));
db.once('open', () => console.log(`[db] Successful connection`));

async function addMessage(message) {
    const myMessage = new Model(message)
    await myMessage.save()
}

async function getMessages(filterUser) {
    const filter = filterUser ? { user: filterUser} : {}
    const messages = await Model.find(filter)
    return messages
}

async function updateText(id, message) {
    const foundMessage = await Model.findOne({_id: id})
    foundMessage.message = message
    const newMessage = await foundMessage.save()   
    return newMessage
}

async function removeMessage(id) {
    let data = await Model.deleteOne({_id: id})
    return data
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText,
    remove: removeMessage
}