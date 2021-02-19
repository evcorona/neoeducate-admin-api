const cors = require('cors')
const express = require('express')

/*Rutas */
const authRouter = require('./routes/auth')
const schoolsRouter = require('./routes/schools')

const server = express()

server.use(cors())
server.use(express.json()) //Middleware

/*Rutas */
server.use('/schools',schoolsRouter)
server.use('/auth',authRouter)  

server.get('/', (request,response) => {
  response.json({
    sucess: true,
    message: 'neoeducateAPI.vxcrown'
  })
})

module.exports = server