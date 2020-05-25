const store = require('./store')

function addChat(users) {
    if (!users || !Array.isArray(users)) {
        return Promise.reject('Invalid users')
    }
    let usersInChat = {
        users
    }
    return store.add(usersInChat)
}

function getChat(userId) {
    return store.get(userId)
}

module.exports = {
    addChat,
    getChat
}