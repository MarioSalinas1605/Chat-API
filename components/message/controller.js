const store = require('./store')

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.log("[messageController] We don't have user or message");
            return reject('Incorrect data')
        }

        const fullMessage = {
            user,
            message,
            date: new Date()
        }

        try {
            store.add(fullMessage)
            resolve(fullMessage)
        } catch (error) {
            reject(error)    
        }
    })
}

function getMessages() {
    return new Promise( (resolve, reject) => {
        try {
            resolve(store.list())
        } catch (error) {
            reject(error)
        }
        
    })
}

module.exports = {
    addMessage,
    getMessages
}