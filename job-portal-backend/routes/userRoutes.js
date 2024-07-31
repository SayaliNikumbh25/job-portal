import { Router } from "express";
import {registerUser, loginUser} from '../controllers/userController.js'
import validateNewUser from "../middlewares/verifyNewUser.js";

const router = Router();

router.get('/', (req,res)=>{
    res.json({
        Message: 'Home Route is working fine',
        date: new Date().toLocaleDateString()
    })
})


router.post('/register',validateNewUser, registerUser)
router.post('/login', loginUser)

export default router

