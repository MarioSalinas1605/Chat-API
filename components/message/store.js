const db = require('mongoose')
const Model = require('./model')
db.Promise = global.Promise
const mongoURI = 'mongodb+srv://admin:4321@cluster0-mxwrf.mongodb.net/telegrom?retryWrites=true&w=majority'
db.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
console.log(`[db] Successful connection`);


function addMessage(message) {
    console.log('[store] Saving message');
    const myMessage = new Model(message)
    myMessage.save()
}

async function getMessages() {
    const messages = await Model.find()
    return messages
}

module.exports = {
    add: addMessage,
    list: getMessages
}