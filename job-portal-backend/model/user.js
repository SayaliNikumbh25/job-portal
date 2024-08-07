import mongoose from "mongoose";
import { type } from "os";

const userSchema = mongoose.Schema({

    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    mobile:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require: true
    }
})

const User = mongoose.model( 'user',userSchema)

export default User