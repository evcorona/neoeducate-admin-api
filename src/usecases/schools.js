//Importando el export del documento de modelo
const Schools = require('./../models/schools')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

function getSchools() {
  return Schools.find({})
}

function getSchoolById(id) {
  return Schools.findById(id) 
} 

function createSchool(nameSchool,enrrolmentDate,card,typePlan,qtyUsers){
   return Schools.create({nameSchool,enrrolmentDate,card,typePlan,qtyUsers})
}

function deleteSchool(id){
  return Schools.findByIdAndDelete(id)
}

function editSchool(id,nameSchool,enrrolmentDate,card,typePlan,qtyUsers){
  return Schools.findByIdAndUpdate(id,{nameSchool,enrrolmentDate,card,typePlan,qtyUsers})
}

module.exports = {
  getSchools,
  getSchoolById,
  createSchool,
  deleteSchool,
  editSchool
}

//nameSchool,enrrolmentDate,card,typePlan,qtyUsers
/*  getSchools,
  getSchoolById,
  createSchool,
  deleteSchool,
  editSchool*/