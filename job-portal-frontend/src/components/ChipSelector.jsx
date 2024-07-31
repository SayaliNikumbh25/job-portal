import React from 'react'
import { useState, useEffect } from 'react';

const ChipSelector = ({selectedSkills, setSelectedSkills}) => {
  const [currentSkill, setCurrentSkill] = useState("");
	const defaultSkills = ["React", "Node", "Express", "JavaScript","Java"];

  const handelAddSkill = (skill)=>{
    setCurrentSkill(skill);
  }

  const handleOnKeyDown =(e)=>{
    if(e.key == 'Enter'){
      if(selectedSkills.includes(currentSkill.trim())){
        return;
      }
      setSelectedSkills([...selectedSkills, currentSkill.trim()])
      setCurrentSkill(null)
    }
  }


  const suggestSkills = ()=>{
    if(!currentSkill){
      return [];
    }
    return defaultSkills.filter((skill)=>{
      return skill.toLowerCase().includes(currentSkill.toLowerCase());
    });
  }

  useEffect(()=>{
    // console.log(currentSkill),
    // console.log(selectedSkills)
    //console.log(suggestSkills())
  },[currentSkill,selectedSkills])

  return (
    <div>
      <label >Skills Required:</label>
      {suggestSkills().map((skill,index)=>(
        <button key={index} onClick={() => setSelectedSkills([...selectedSkills, skill.trim()])}>{skill}</button>
      ))}
      <input type="text" 
        value={currentSkill}
        onChange={(e)=>handelAddSkill(e.target.value)}
        onKeyDown={handleOnKeyDown}
      />

      <div>
        {
          selectedSkills.map((skill, index)=>(
            <div key={index}>
              {skill}
              <button onClick={()=>{
                setSelectedSkills(selectedSkills.filter((s)=> s !== skill))
              }}>X</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ChipSelector