const store = require('./store')

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if (!user || !user) {
            console.log("[messageController] We don't have user or message");
            return reject('Incorrect data')
        }

        const fullMessage = {
            user,
            message,
            date: new Date()
        }

        store.add(fullMessage)
        resolve(fullMessage)
    })
}

function getMessages() {
    return new Promise( (resolve, reject) => {
        resolve(store.list())
    })
}

module.exports = {
    addMessage,
    getMessages
}