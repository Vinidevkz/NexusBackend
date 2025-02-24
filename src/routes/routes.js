import express from 'express'
import {createUser, loginUser, updateUser, deleteUser} from '../controllers/userController.js'

import authMiddleware from '../config/authMiddleware.js'

const router = express.Router()

//User routes
router.post('/signon', createUser)
router.post('/signin', loginUser)
router.put('/update', authMiddleware, updateUser)
router.delete('/delete', authMiddleware, deleteUser)

export default router