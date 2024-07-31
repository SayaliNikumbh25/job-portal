import User from "../model/user.js";
import bycrpt from 'bcrypt';
import jwt from 'jsonwebtoken';

const registerUser = async(req, res,next)=>{
    try {
        const {name, email, mobile, password} = req.body;

        if(!name || !email || !mobile || !password){
            res.json({
                Status: 'Failure',
                Message: 'Please enter all the fileds',    
            })
        }
        else{
            const user = await User.findOne({email});
            if(!user){
                const hashPassword = await bycrpt.hash(password, 10);
               
                const newUser = await User.create({name, email,mobile, password:hashPassword});
                res.status(201).json({
                    Status: 'Success',
                    Message: 'User created successfuly',  
                    User: newUser  
                })
            }else{
                return res.status(400).json({
                    message: 'User already exists, please use another email address',
                });
            }
        }
    
    } catch(error) {
        next("Error Creating User", error);
    }
}

const loginUser = async(req,res,next)=>{
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email})
        if(user){
            const decryptPassword = await bycrpt.compare(password, user.password)
            if(decryptPassword){
                const token = jwt.sign(
                    {userID:user._id},
                    'secret'
                    
                )
                res.status(200).json({
                    Message: 'Login successful',
                    email: user.email,
                    Token: token
                })
            }else{
                res.status(400).json({
                    Message: 'Invalide Credentilas',
                })
            }
            
        }else{
            res.status(400).json({
                Message: 'User not found',
            })
        }
    } catch (error) {
        next("Error logging in", error)
    }
}

export  {registerUser, loginUser}