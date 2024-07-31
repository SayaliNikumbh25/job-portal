import React from 'react'
import { useNavigate } from 'react-router-dom'

const JobCard = ({job}) => {
    const {title,
        logoUrl,
        salary,
        location,
        locationType,
        jobType,
        skills,
        _id} = job
    
    const navigate = useNavigate();
  return (
    <div>
        {title}
        {<img src={logoUrl} height={"50px"} alt="" />  }
        {salary}
        {location}
        {locationType}
        {jobType}
        {skills.map((skill, index)=>(
             <p key={index}>{skill}</p>
        ))}
        <button onClick={()=>navigate(`job/${_id}`)}>View Details</button>
    </div>
  )
}

export default JobCard