import axios from 'axios'

const Backend_URL = 'http://localhost:3000'

const fetchProducts = async()=>{
    try {
        const response = await axios.get(`${Backend_URL}/job`)
        return response
    } catch (error) {
        return error
    }
    
}

const fetchJobsByQuery = async(query)=>{
    const {title,
        skills
    } = query;
    try {
        
        const responce = await axios.get(`${Backend_URL}/job`,{
            params:{
                title,
                skills
            }
        })
        return responce
    } catch (error) {
        return error
    }
}

const fetchJobsByID = async(id)=>{
    try {
        const responce = await axios.get(`${Backend_URL}/job/${id}`)
        return responce
    } catch (error) {
        return error
    }
    
}

const createJob = async(job)=>{
    try {
        const token = localStorage.getItem("token");
        const config = {
            headers:{
                Authorization: `Bearer ${token}`
            }
        };
        const responce = await axios.post(`${Backend_URL}/job/add`,job, config)
        return responce
    } catch (error) {
        return error
    }
}

export {fetchProducts, fetchJobsByQuery, fetchJobsByID, createJob};