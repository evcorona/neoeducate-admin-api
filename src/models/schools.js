const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  nameSchool: {
    type: String,
    trim:true,
    required: true
  },
  enrrolmentDate: {
    type: String,
    trim:true,
    required: true
  },
  card: {
    type: String,
    trim:true,
    required: true
  },
  typePlan: {
    type: String,
    trim:true,
    required: true
  },
  qtyUsers: {
    type: Number,
    required: true
  },
})

//Exportando un valor = Modelo representado con una constante que inicia con mayus
module.exports = mongoose.model('schools', schema)

//nameSchool,enrrolmentDate,card,typePlan,qtyUsers