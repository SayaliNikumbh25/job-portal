import jwt from 'jsonwebtoken';

const verifyToken = (req,res,next) =>{
    try {
        const token = req.header('Authorization').split(' ')[1];
        if(!token) return res.status(401).json({Message: 'Token not found or invalid'});
        const decoded = jwt.verify(token,'secret');
        console.log(decoded)
        req.refUserId = decoded.userID;
        
        next();
    } catch (error) {
        res.status(500).json({Message: 'Token not found or invalid'});
    }
}

export default verifyToken