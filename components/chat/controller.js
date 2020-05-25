const store = require('./store')

function addChat(users) {
    if (!users) {
        return Promise.reject('Invalid users')
    }
    let usersInChat = {
        users
    }
    return store.add(usersInChat)
}

function getChat() {
    return store.get()
}

module.exports = {
    addChat,
    getChat
}