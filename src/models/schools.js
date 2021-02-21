const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  nameSchool: {
    type: String,
    required: true
  },
  enrrolmentDate: {
    type: String,
    required: true
  },
  card: {
    type: String,
    required: true
  },
  typePlan: {
    type: String,
    required: true
  },
  qtyUsers: {
    type: Number,
    required: true
  },
})

//Exportando un valor = Modelo representado con una constante que inicia con mayus
module.exports = mongoose.model('schools', schema)
