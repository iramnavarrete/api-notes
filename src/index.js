const express = require('express')
const verifyToken = require('./middleware/VerifyToken')
const notesRoute = require('./routes/notes')
const usersRoute = require('./routes/users')
const app = express()
// const cors = require('cors')

//middlewares
// app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false /*Sirve para imagenes o datos así, es false porque no lo requiero*/ })) //Para cuando me envian datos desde un formulario

//routes
app.get('/', (req, res)=>{
    res.send("Hola mundo from the API")
})
app.use('/users', usersRoute)
app.use('/notes', verifyToken, notesRoute)

app.listen(5000, '0.0.0.0', () => console.log("Server on Port 5000"))
// console.log('Server on port 3000') 