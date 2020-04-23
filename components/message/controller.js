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
        console.log(fullMessage);

        resolve(fullMessage)
    })
}

module.exports = {
    addMessage
}