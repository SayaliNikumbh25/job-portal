import React, {useEffect, useState} from 'react'
import { fetchProducts, fetchJobsByQuery } from '../api/job'
import Header from '../components/Header';
import QueryWidget from '../components/QueryWidget';
import skills from '../data/skills';
import JobCard from '../components/JobCard';

const HomePage = ({currentUser, setCurrentUser}) => {

  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState({
    title:"",
    skills:[]
  })

  useEffect(()=>{
    handelFetchJobs();
  },[])

  const handelFetchJobs = async()=>{
      
      const response = await fetchJobsByQuery(query)
      if(response.status == 200){
        setJobs(response.data.Jobs)
      }
      
  }

  useEffect(()=>{
    console.log(jobs)
  },[jobs])

  useEffect(()=>{
    console.log(query)
  },[query])

  return (
    <div>
      <Header  currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <QueryWidget query={query} setQuery={setQuery} handelFetchJobs={handelFetchJobs}/>
      {jobs.map((job,index)=>
          <JobCard job={job} key={index}/>
      )}

    </div>
  )
}

export default HomePage