const Model = require('./model')

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