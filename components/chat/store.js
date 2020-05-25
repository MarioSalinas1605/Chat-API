const Model = require('./model')

function addChat(users) {
    const myChat = new Model(users)
    return myChat.save()
}

function getChat() {
    return new Promise((resolve, reject) => {
        Model.find()
            .populate('users')
            .exec((error, populate) => {
                if (error) {
                    reject(error)
                    return false
                }
                resolve(populate)
            })
    })
}

module.exports = {
    add: addChat,
    get: getChat
}