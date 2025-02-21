import 'dotenv/config';

import cors from 'cors';
import express from 'express'
import connectDB from './src/database/connection.js'

const app = express()
const port = 3000
app.use(cors());
app.use(express.json());

connectDB()

import userRoutes from './src/routes/routes.js'

app.use('/users', userRoutes)
app.use(express.json())

app.listen(port, () => {
    console.log('- Nexus Backend listen in', port, 'port')
})