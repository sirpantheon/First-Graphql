const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
        trim: true,
    },
    apelido: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    }, 
    criador: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Usuario', UsuarioSchema);