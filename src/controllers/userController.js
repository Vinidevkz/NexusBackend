import User from "../models/user.js"
import generateToken from "../config/authToken.js"
import bcrypt from 'bcrypt'

export const createUser = async (req, res) => {
    try {
        const {name, userName, email, password, bio, age, area} = req.body

        const existingEmail = await User.findOne({email})

        if(existingEmail){
            return res.status(400).json({message: 'Este email já está sendo usado.'})
        }

        const existingUserName = await User.findOne({userName})

        if(existingUserName){
            return res.status(400).json({message: 'Este nome de usuário já está sendo usado.'})
        }

        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(password, saltRounds)

        const userResponse = new User({name, userName, email, password: hashPassword, bio, age, area})
        await userResponse.save()
        
        //generate token
        const token = generateToken(userResponse._id)

        res.status(200).json({
            message: 'Cadastro realizado com sucesso!!',
            userResponse: {
                _id: userResponse._id,
                name: userResponse.name,
                userName: userResponse.userName,
                email: userResponse.email,
                bio: userResponse.bio,
                age: userResponse.age,
                area: userResponse.area,
            },
            token,
        });
    } catch (error) {
        console.error('Erro ao se cadastrar: ', error)
        res.status(500).json({message: 'Erro interno do servidor', error: error.message, stack: error.stack})
    }
}

export const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body

        const userResponse = await User.findOne({email})

        if(!userResponse){
            return res.status(400).json({message: 'Usuário não encontrado.'})
        }

        const isPasswordValid = await bcrypt.compare(password, userResponse.password)

        if(!isPasswordValid){
            return res.status(400).json({message: 'Senha incorreta.'})
        }

        const token = generateToken(userResponse._id)

        res.status(200).json({message: 'Login realizado com sucesso.', userResponse, token})
    } catch (error) {
        console.log('Erro ao fazer login: ', error)
        res.status(500).json({message: 'Erro interno do servidor. Tente novamente mais tarde.'})
    }
}

export const updateUser = (req, res) => {
    res.status(200).json({message: 'Cadastro realizado com sucesso!'})
}

export const deleteUser = (req, res) => {
    res.status(200).json({message: 'Cadastro realizado com sucesso!'})
}

