import express from 'express';
import dbConnect from './db.js';
import userRoute from './routes/userRoutes.js';
import jobRoute from './routes/jobRoutes.js';
import errorHandler from './middlewares/errorHandler.js';
import cors from 'cors'


const app = express();
app.use(express.json())
app.use(cors())

app.use('/user', userRoute)
app.use('/job', jobRoute)

app.use("*",(req, res)=>{
    res.status(404).json({
        Message:"End Point not found",
        status:"Error"
    });
})
app.use(errorHandler)
app.listen(3000, ()=>{
    console.clear()
    dbConnect()
    .then(()=> console.log(`Server running at port ${3000}`))
    
})