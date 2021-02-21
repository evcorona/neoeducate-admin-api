const express = require('express')
const schools = require('./../usecases/schools')
const authMiddleware = require('../middlewares/auth')

const router = express.Router()

router.get('/', authMiddleware, async (request, response) => {
  const allSchools = await schools.getSchools()

  response.json({
    success: true,
    message: 'Collection',
    data: allSchools
  })
})

router.get('/:id', authMiddleware, async (request, response) => {
  const schoolById = await schools.getSchoolById(request.params.id)

  response.json({
    success: true,
    message: 'Unique',
    data: schoolById
  })
})

router.post('/', authMiddleware, async (request, response) => {
  const { nameSchool, enrrolmentDate, card, typePlan, qtyUsers } = request.body
  const schoolCreated = await schools.createSchool(nameSchool, enrrolmentDate, card, typePlan, qtyUsers)

  response.json({
    success: true,
    message: 'Created'
  })
})

router.delete('/:id', authMiddleware, async (request, response) => {
  const { nameSchool, enrrolmentDate, card, typePlan, qtyUsers } = request.body
  const schoolDeleted = await schools.deleteSchool(request.params.id, nameSchool, enrrolmentDate, card, typePlan, qtyUsers)

  response.json({
    success: true,
    message: 'Deleted'
  })
})

router.patch('/:id', authMiddleware, async (request, response) => {
  const schoolUpdated = await schools.editSchool(request.params.id, request.body)

  response.json({
    success: true,
    message: 'Updated',
  })
})

module.exports = router

//nameSchool,enrrolmentDate,card,typePlan,qtyUsers
/*  getSchools,
  getSchoolById,
  createSchool,
  deleteSchool,
  editSchool*/