const errorHandler = (error, message) =>{
    console.log("inside Error handler", error, message);
    res.status(501).json(error)

}

export default errorHandler