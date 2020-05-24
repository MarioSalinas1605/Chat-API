const mongoose = require('mongoose')
const db = mongoose.connection

mongoose.Promise = global.Promise


function connect(url) {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    db.on('error', console.error.bind(console, '[db] connection error:'));
    db.once('open', () => console.log(`[db] Successful connection`));
}

module.exports = connect