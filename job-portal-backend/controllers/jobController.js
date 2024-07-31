import Job from "../model/job.js";
//companyName, title, description, logoUrl, salary, location, duration, locationType, information, jobType, skills

const getJob = async (req, res, next) => {
  try {
    const { title, skills } =
      req.query;
    // const skillsArray = skills ? skills.split(",") : [];
    // console.log(minSalary, maxSalary, location, jobType, skills);
    // console.log("minSalary "+ minSalary, "maxSalary "+ maxSalary)
    const jobs = await Job.find({
      
        title: title || {$exists: true}
      
      // salary: {
      //   $gte: parseInt(minSalary)  || 0,
      //   $lte: parseInt(maxSalary) || 99999999,
      // }
      
    });

    // const finaljobs = jobs.filter((job) => {
    //   let isSkillMatched = true;
    //   if (skills.length > 0) {
    //     isSkillMatched = skills.every((skill) =>
    //       Job.skills.includes(skill)
    //     );
    //     console.log(isSkillMatched);
    //   }

    //   return isSkillMatched;
    // });

    res.status(200).json({
      Message: "Job Route is working fine",
      Jobs: jobs,
    });
  } catch (error) {
    next("Error finding job", error);
  }
};

const addJob = async (req, res, next) => {
  try {
    const {
      companyName,
      title,
      description,
      logoUrl,
      salary,
      location,
      duration,
      locationType,
      information,
      jobType,
      skills,
    } = req.body;
    const refUserId = req.refUserId;
    const newJob = await Job.create({
      companyName,
      title,
      description,
      logoUrl,
      salary,
      location,
      duration,
      locationType,
      information,
      jobType,
      skills,
      refUserId,
    });
    res.json({
      Message: "Job Created Successfuly",
      JobID: newJob._id,
    });
  } catch (error) {
    next({
      Message: "Error adding job",
      error
    });
  }
};

const findOneJob = async (req, res, next) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId);
    if (job) {
      res.status(201).json({
        Status: "Success",
        Data: job,
      });
    } else {
      res.status(404).json({
        Status: "Failure",
        Message: "Job not found",
      });
    }
  } catch (error) {
    next("Error finding job", error);
  }
};

const updateExistingJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    const refUserId = req.refUserId
    const {
      companyName,
      title,
      description,
      logoUrl,
      salary,
      location,
      duration,
      locationType,
      information,
      jobType,
      skills,
    } = req.body;
    const updateJob = await Job.findByIdAndUpdate(jobId, {
      companyName,
      title,
      description,
      logoUrl,
      salary,
      location,
      duration,
      locationType,
      information,
      jobType,
      skills,
      refUserId
    },{new:true});
    res.status(201).json({
      Message: "Job Updated successfuly",
      job: updateJob
    });
  } catch (error) {
    next({
      Message: "Error updating job",
      error
    });
  }
};



const deleteJob = async(req,res)=>{
  try {
    const jobID = req.params.id;
    console.log(jobID)
    await Job.findByIdAndDelete(jobID)
    res.status(201).json({
      Message:"Job Deleted successfully"
    })
  } catch(error){
    res.json({
      Message:"Error",
      error:error
    })
  }
  
}

export default { addJob, getJob, findOneJob, updateExistingJob, deleteJob };
