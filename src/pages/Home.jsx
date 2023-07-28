import React from 'react'
import { CgMail } from 'react-icons/cg'
import "../style/home.css"
import { AiOutlineInstagram ,AiFillGithub} from 'react-icons/ai'
const Home = () => {
  return (
    <div className='home'>
        <div className='about'>
          <h2 className='h2'>hi, my name is Prince Ali</h2>
          <div className='prompt'><p>i am a UI/UX  developer with a passion for learning. coding is like a hobby</p></div>
              <div className='home-list'>
               <div>
                    <a href="mailto:marvinprince232@gmail.com" target='_blank'>
                        <CgMail  className='svg'/>
                    </a>
                </div>
                <div>
                    <a href="#" target='_blank'>
                        <AiOutlineInstagram className='svg'/>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/princedev3" target='_blank'>
                        <AiFillGithub className='svg'/>
                    </a>
                </div>
             </div>
        </div>
        <div className='skill'>
            <h2>Skills</h2>
            <ol className='list'>
              <li className='item'>
                <h3>Front End</h3>
              <div className='item-span'>

                <span>React</span>
                <span>Javascript</span>
                <span>CSS</span>
                <span>html</span>
                <span>Tailwind</span>
              </div>
            
              </li>
              <li className='item'>
                <h3>Back End</h3>
                <div className='item-span'>

                <span>Express JS</span>
                <span>SQL</span>
                <span>Node JS</span>
                </div>
              </li>
            </ol>
        </div>
    </div>
  )
}
//{}[]
export default Home