import mongoose from "mongoose";

const dbConnect = async() => {
    try {
        await mongoose.connect('mongodb+srv://sayalinikumbh:sayali2598@cluster1.06ujhga.mongodb.net/job-portal-1?retryWrites=true&w=majority&appName=Cluster1')
        console.log('Database connected successfuly')
    } catch (error) {
        console.error(error)
        
    }
    
}
     


export default dbConnect