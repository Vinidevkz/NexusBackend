import express from 'express'
import {createUser, loginUser, updateUser, deleteUser} from '../controllers/userController.js'

const router = express.Router()

//User routes
router.post('/signon', createUser)
router.get('/signin', loginUser)
router.put('/update', updateUser)
router.delete('/delete', deleteUser)

export default router