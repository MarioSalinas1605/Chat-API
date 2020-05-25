const Model = require('./model')

function addChat(users) {
    const myChat = new Model(users)
    return myChat.save()
}

function getChat(userId) {
    let filter = {}
    if (userId) {
        filter = { users: userId }
    }

    return new Promise((resolve, reject) => {
        Model.find(filter)
            .populate('users')
            .exec((error, populated) => {
                if (error) {
                    reject(error)
                    return false
                }
                resolve(populated)
            })
    })
}

module.exports = {
    add: addChat,
    get: getChat
}