
import { readFile, writeFileSync } from 'fs';
import express from 'express';
import userRoutes from './src/modules/users/user-routes.js';

const app = express();
app.use(express.json())

app.use(userRoutes)



app.listen(3000);