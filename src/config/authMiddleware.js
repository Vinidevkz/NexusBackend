import JWT from 'jsonwebtoken'
const jwt = JWT
import 'dotenv/config';

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')
    if (!token) return res.status(401).json({message: 'Acesso Negado.'})
    
        try {
            const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET)
            req.user = decoded.id
            next()
        } catch (error) {
            res.status(401).json({message: 'Token de autenticação inválido.'})
        }
}

export default authMiddleware