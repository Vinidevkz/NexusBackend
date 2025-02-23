import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    userName: {type: String, required: true, unique: true},
    email: {type: String, required: false, unique: true},
    password: {type: String, required: true},
    bio: {type: String, required: false},
    age: {type: String, required: true},
    area: {type: String, required: true}
},{timestamps: true})

const User = mongoose.model('User', userSchema)

export default User