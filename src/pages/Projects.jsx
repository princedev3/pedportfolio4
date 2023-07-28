import  '../style/project.css'
import ProjectList from '../helpers/ProjectList'
import { ProjectLists } from '../Asset'

const Projects = () => {
  return (
    <div className='projects'>
      <h1>My personal project</h1>

      <div className='projectlist'>
      {
        ProjectLists.map(item=>(
          <ProjectList name={item.name} id={item.id} image={item.image} key={item.id}/>
        ))
      }
      </div>
    </div>
  )
}

export default Projects