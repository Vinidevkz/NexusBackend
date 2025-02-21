import mongoose from 'mongoose'; 

const DB_URI = process.env.DB_URI

const connectDB = async () => {
    try{
        await mongoose.connect(DB_URI)
        console.log('- Conectado ao Banco de Dados')
    }catch(error){
        console.log('Erro ao se conectar com o Banco de Dados, ', error)
        process.exit(1)
    }
}

export default connectDB