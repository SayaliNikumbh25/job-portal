import axios from 'axios';

const Backend_URL = 'http://localhost:3000'

const Register = async(name,email,mobile, password)=>{
    try {
        const responce = await axios.post(`${Backend_URL}/user/register`,{name,email,mobile,password});
        console.log(JSON.stringify(responce))
        return responce
    } catch (error) {
        console.log("error"+error)
        return error;
    }   
    
}

const Login = async(email,password)=>{
    try {
        const responce = await axios.post(`${Backend_URL}/user/login`,{email,password});
        return responce;
    } catch (error) {
        console.log("error", error)
        return error;
    }
}

export {Login, Register}