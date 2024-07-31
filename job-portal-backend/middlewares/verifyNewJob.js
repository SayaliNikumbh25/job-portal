const validateNewJob = (req,res,next)=>{
    const {companyName, title, description, logoUrl, salary, location, duration, locationType, information, jobType, skills} = req.body;
    const refUserId = req.refUserId;

    try {
        const parseSalary = parseInt(salary)
    if (!companyName || !title || !description || !logoUrl || !parseSalary || !location || !duration || !locationType || !information|| !jobType || !skills || !refUserId)
        {
            return res.status(400).json({
                Message: 'Please provide all the fields'
            })
        }   
        
    const validjobTypes = ["Full-Time", "Part-Time", "Internship"];
    const validlocationTypes = ["On-Site", "Remote", "Hybrid"]
    //const validateSkills = skillsRequired.every(skill => typeof skill === 'string');
    const validSkills =Array.isArray(skills) && skills.every(skill => typeof skill === 'string');
    const validSalary = typeof parseSalary === 'number' && parseSalary > 0;
    const validjobType = validjobTypes.includes(jobType);
    const validLogoUrl = logoUrl.match(/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))$/i);
    const validlocationType = validlocationTypes.includes(locationType)

    if (!validjobType) {
        throw new Error('Invalid job type')
        
    }
    if (!validSkills) {
        throw new Error('Invalid skills')
    }
    if (!validSalary) {
        throw new Error('Invalid salary')
    }
    if (!validLogoUrl) {
        throw new Error('Invalid logo URL')
    }

    if(!validlocationType){
        throw new Error('Invalid location type')
    }
    
    next();  
    } catch (error) {
        next({
            message:"Error adding job",
            error:error
        })
    }

    
}

export default validateNewJob