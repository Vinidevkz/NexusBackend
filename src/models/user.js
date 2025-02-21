import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: false},
    password: {type: String, require: true},
    bio: {type: String, require: false},
    age: {type: String, require: true},
    area: {type: String, require: true}
},{timestamps: true})

const User = mongoose.model('User', userSchema)

export default User