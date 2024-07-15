

import express from 'express';
import { addUser, deleteUsers, getAllUsers, searchUsers, sortUsers, updateUsers } from './user.controller.js';
const userRoutes = express.Router()


userRoutes.get("/", getAllUsers)
userRoutes.post("/user", addUser)
userRoutes.get("/sort", sortUsers)
userRoutes.put("/update", updateUsers)
userRoutes.delete("/delete/:id", deleteUsers)
userRoutes.get("/search/:id", searchUsers)

export default userRoutes;