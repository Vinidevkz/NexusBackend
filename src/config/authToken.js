import JWT from 'jsonwebtoken'
const jwt = JWT
import 'dotenv/config';

const generateToken = (_id) => {
    return jwt.sign({id: _id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES})
}

export default generateToken