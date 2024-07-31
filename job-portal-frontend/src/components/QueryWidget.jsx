import React from 'react'
import { useState } from 'react'
import skills from '../data/skills';

const QueryWidget = ({query, setQuery,handelFetchJobs}) => {
  const handleSkillChange =(skill)=>{

      if(skill==="placeholder"){
        return
      }
      if(!query.skills.includes(skill)){
        setQuery({...query, skills:[...query.skills, skill]})
      }
  }

  const handleClearFilters = ()=>{
    setQuery({
      title:"",
      skills:[]
    })
  }
  return (
    <div>
      <input 
        type="text"
        placeholder="Title"
        value={query.title}
        onChange={(e)=>setQuery({...query,title: e.target.value})} 
      />
      <select onChange={(e)=> handleSkillChange(e.target.value)} name="" id="">
          <option value="placeholder">Select skill</option>
       { skills.map((skill, index) =>(
          <option key={index} value={skill}>
            {skill}
          </option>
       ) )}
        
      </select>
      <button onClick={handelFetchJobs}>Apply Filter</button>
      <button onClick={handleClearFilters}>clear</button>
    </div>
  )
}

export default QueryWidget