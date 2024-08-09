
import express from 'express'
// import bycrypt from 'bycrypt'
import mongoose from 'mongoose'
import cors from 'cors'
import userRoute from './src/modules/users/user.routes.js'
import dbConnection from './database/dbconnections.js'
import noteRoute from './src/modules/notes/note.routes.js'
import sendOurEmail from './src/utli/sendEmail.js'


const app = express()
const port = 3000
app.use(express.json())
app.use(cors())
app.use(userRoute)
app.use(noteRoute)
// app.use('/user', userRoute)

dbConnection
sendOurEmail

app.listen(port, () => console.log(`Example app listening on port ${port}!`))