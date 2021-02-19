const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
})

//Exportando un valor = Modelo representado con una constante que inicia con mayus
module.exports = mongoose.model('users', schema)

