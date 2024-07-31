import React from 'react'
import { useEffect, useState } from 'react';
import Header from '../components/Header.jsx'
import { fetchJobsByID } from '../api/job.js';

const JobPage = ({currentUser, setCurrentUser}) => {
  const jobID = window.location.pathname.split("/").pop();
  console.log(jobID);
  const[job, setJob]= useState()

  useEffect(()=>{
    handlefetchJobById()
  },[])

  const handlefetchJobById =async ()=>{
      const response = await fetchJobsByID(jobID)
      if(response.status === 201){
        setJob(response.data.Data)
      }
      
  }

  useEffect(()=>{
    if(job){
      timeElasped(job.createdAt)
    }
  },[job])
  const timeElasped = (createdAt)=>{
    const currentTime = new Date();
    const createdAtTime = new Date(createdAt)
    const differenceInMillis = currentTime - createdAtTime;
    console.log(differenceInMillis)

    const seconds = Math.floor(differenceInMillis / 1000);
		const minutes = Math.floor(seconds / 60);
		const hours = Math.floor(minutes / 60);
		const days = Math.floor(hours / 24);
		const weeks = Math.floor(days / 7);

		if (weeks > 0) {
			return weeks === 1 ? "1w ago" : `${weeks}w ago`;
		} else if (days > 0) {
			return days === 1 ? "1day ago" : `${days}days ago`;
		} else if (hours > 0) {
			return hours === 1 ? "1hr ago" : `${hours}hrs ago`;
		} else if (minutes > 0) {
			return minutes === 1 ? "1min ago" : `${minutes}min ago`;
		} else {
			return seconds === 1 ? "1sec ago" : `${seconds}sec ago`;
		}


  }
  return (
    <div>
      <Header />
      {job && (<div>
        {/*1st row*/}
        <p>{timeElasped(job.createdAt)}</p>
        <p>{job.jobType}</p>
        <img src={job.logoUrl} height={"50px"} alt="job logo" />
        <p>{job.companyName}</p>

        {/*2nd row*/}
        <h4>{job.title}</h4>
        <button>Edit Job</button>
        <p>{job.location}</p>

        {/*3rd row*/}
        <p>stipend</p>
        <h2>{job.salary}</h2>
        <p>duration</p>

        {/*about component*/}
        {/*about job*/}
        {job.skills.map((skill, index)=>(
             <p key={index}>{skill}</p>
        ))}
        {/*Additional info*/}

        <h3></h3>
      </div>)}
    </div>
  )
}

export default JobPage