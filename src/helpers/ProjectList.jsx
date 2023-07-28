import React from 'react'
import { useNavigate } from 'react-router-dom'


const ProjectList = ({name,image,id}) => {
  const navigate= useNavigate()

  return (
    <div className='projectitem' onClick={()=>navigate("/project/"+id)} >
      <div >
          <div  style={{backgroundImage:`url(${image})` }} className='bgimage'/>
        <h3>{name}</h3>
      </div>
    </div>
  )
}

export default ProjectList