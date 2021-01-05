const express = require('express')
const verifyToken = require('./middleware/VerifyToken')
const notesRoute = require('./routes/notes')
const usersRoute = require('./routes/users')
const app = express()
const cors = require('cors')

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false /*Sirve para imagenes o datos así, es false porque no lo requiero*/ })) //Para cuando me envian datos desde un formulario

//routes
app.use('/users', usersRoute)
app.use('/notes', verifyToken, notesRoute)

app.listen(3000)
console.log('Server on port 3000') 