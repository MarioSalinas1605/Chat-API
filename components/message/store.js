const Model = require('./model')

async function addMessage(message) {
    const myMessage = new Model(message)
    await myMessage.save()
}

function getMessages(filterUser) {
    return new Promise((resolve, reject) => {
        const filter = filterUser ? { chat: filterUser } : {}
        try {
            Model.find(filter)
                .populate('user')
                .exec((error, populated) => {
                    if (error) {
                        reject(error)
                        return false
                    }
                    resolve(populated)
                })
        } catch (error) {
            reject(error)
        }
    })
}

async function updateText(id, message) {
    const foundMessage = await Model.findOne({ _id: id })
    foundMessage.message = message
    const newMessage = await foundMessage.save()
    return newMessage
}

async function removeMessage(id) {
    let data = await Model.deleteOne({ _id: id })
    return data
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText,
    remove: removeMessage
}