import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectLists } from '../Asset'
import {LiaInternetExplorer} from "react-icons/lia"
import "../style/singlepage.css"
//{}[]
const SingleProject = () => {
    const {id} =useParams()
   const project = ProjectLists[id-1]
console.log(project)
  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image}/>
        <a href={project.link} target='_blank'>
         <p>click to visit webpage</p>
        <h3>website:</h3>< LiaInternetExplorer/> 
        </a>
    </div>
  )
}

export default SingleProject