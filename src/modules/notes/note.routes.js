import express from 'express'
import { addNotes, getAllNote } from './note.controller.js'





const noteRoute = express.Router()

noteRoute.get('/note', getAllNote)
noteRoute.post('/note', addNotes)







export default noteRoute