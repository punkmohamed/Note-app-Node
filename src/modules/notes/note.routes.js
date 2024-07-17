import express from 'express'
import { addNotes, getAllNote, updateNotes } from './note.controller.js'
import verifyToken from '../../middleware/verifyToken.js'
import allow from '../../middleware/allowTo.js'




const noteRoute = express.Router()



noteRoute.use('/note', verifyToken)
noteRoute.get('/note', allow("Admin", "User"), getAllNote)
noteRoute.post('/note', allow("User"), addNotes)
noteRoute.put('/note/:id', updateNotes)







export default noteRoute