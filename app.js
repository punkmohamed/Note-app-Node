
import express from 'express'
// import bycrypt from 'bycrypt'
import mongoose from 'mongoose'

import userRoute from './src/modules/users/user.routes.js'
import dbConnection from './database/dbconnections.js'
import noteRoute from './src/modules/notes/note.routes.js'
import sendOurEmail from './src/utli/sendEmail.js'


const app = express()
const port = 3000
app.use(express.json())
app.use(userRoute)
app.use(noteRoute)

dbConnection
sendOurEmail

app.listen(port, () => console.log(`Example app listening on port ${port}!`))