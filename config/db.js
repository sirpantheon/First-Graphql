const mongoose = require('mongoose');

require('dotenv').config({ path: 'variables.env' })

const conectDB = async () => {
    try {
        mongoose.connect(process.env.DB_MONGO,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect');
    } catch (error) {
        console.log(`houve um error ${error}`)
        process.exit(1)
    }
}

module.exports = conectDB