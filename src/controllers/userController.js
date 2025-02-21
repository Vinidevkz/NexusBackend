import User from "../models/user.js"

export const createUser = async (req, res) => {

    try {
        const {name, email, password, bio, age, area} = req.body

        const existingUser = await User.findOne({email})

        if(existingUser){
            return res.status(400).json({message: 'Este email já está sendo usado.'})
        }

        const newUser = new User({name, email, password, bio, age, area})
        await newUser.save()
        
        res.status(200).json({message: 'Cadastro realizado com sucesso!'})
    } catch (error) {
        console.error('Erro ao se cadastrar: ', error)
        res.status(500).json({message: 'Erro interno do servidor'})
    }
}

export const loginUser = (req, res) => {
    res.status(200).json({message: 'Cadastro realizado com sucesso!'})
}

export const updateUser = (req, res) => {
    res.status(200).json({message: 'Cadastro realizado com sucesso!'})
}

export const deleteUser = (req, res) => {
    res.status(200).json({message: 'Cadastro realizado com sucesso!'})
}

