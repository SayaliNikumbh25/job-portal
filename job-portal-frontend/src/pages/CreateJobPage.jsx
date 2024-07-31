import React from 'react'
import { useState, useEffect } from 'react'
import ChipSelector from '../components/ChipSelector';
import { createJob } from '../api/job.js';

const CreateJobPage = ({currentUser}) => {
  const [job, setJob] = useState({
      companyName:"",
      title:"",
      description:"",
      logoUrl:"",
      salary:"",
      location:"",
      duration:"",
      locationType:"",
      information:"",
      jobType:"",
      skills:[]
  })
  const validjobTypes = ["Full-Time", "Part-Time", "Internship"];
  const validlocationTypes = ["On-Site", "Remote", "Hybrid"]

  const handleJobTypeChange = (value)=>{
        if(validjobTypes.includes(value)){
            setJob({...job, jobType: value})
        }
  };

  const handlelocationTypeChange =(value)=>{
    if(validlocationTypes.includes(value)){
        setJob({...job, locationType:value})
    }
  };

  const handleAddJob =async()=>{
    console.log(job)
    const response = await createJob(job);
    console.log(response)
  }
  

  return (
    <div>
        <h3>Add Job  description</h3>
        <label>Company Name</label>
        <input type="text"
            placeholder='Enter your company name here'
            value={job.companyName}
            onChange={(e)=>setJob({...job, companyName:e.target.value})}
        />
        <br />
        <br />

        <label>Job Position</label>
        <input type="text"
            placeholder='Enter Job Position'
            value={job.title}
            onChange={(e)=>setJob({...job, title:e.target.value})}
        />
         <br />
         <br />

         <label>Job Description</label>
        <input type="text"
            placeholder='Type the Job Description'
            value={job.description}
            onChange={(e)=>setJob({...job, description:e.target.value})}
        />
        <br />
        <br />

        <label>Add logo URL</label>
        <input type="text"
            placeholder='Enter the link'
            value={job.logoUrl}
            onChange={(e)=>setJob({...job, logoUrl:e.target.value})}
        />
         <br />
         <br />


        <label>Monthly Salary</label>
        <input type="number"
            placeholder='Enter ammount in rupees'
            value={job.salary}
            onChange={(e)=>setJob({...job, salary:e.target.value})}
        />
        <br />
        <br />

        <label>Location</label>
        <input type="text"
            placeholder='Enter Location'
            value={job.location}
            onChange={(e)=>setJob({...job, location:e.target.value})}
        />
        <br />
        <br />

        <label>Duration</label>
        <input type="text"
            placeholder='Enter Duration'
            value={job.duration}
            onChange={(e)=>setJob({...job, duration:e.target.value})}
        />
        <br />
        <br />

        <label>Remote/office</label>
        <select
        value={job.locationType}
        onChange={(e)=>handlelocationTypeChange(e.target.value)}
        >
            <option value="Select Job type">Select location type</option>
            {validlocationTypes.map((type, index)=>(
                    <option key={index} value={type}>{type}</option>
            ))}  
        </select>
        <br />
        <br />

        <label>Information</label>
        <input type="text"
            placeholder='Enter additional Information'
            value={job.information}
            onChange={(e)=>setJob({...job, information:e.target.value})}
        />
        <br />
        <br />

        <label>Job Type</label>
        <select
        value={job.jobType}
        onChange={(e)=>handleJobTypeChange(e.target.value)}
        >
            <option value="Select Job type">Select Job type</option>
            {validjobTypes.map((type, index)=>(
                    <option key={index} value={type}>{type}</option>
            ))}  
        </select>
        <br />
        <br />
        <ChipSelector selectedSkills={job.skills} setSelectedSkills={(skills)=>setJob({...job, skills})}/>
        <button>Cancel</button>
        <button onClick={handleAddJob}>+Add Job</button>

    </div>
  )
}

export default CreateJobPage