
import "../style/footer.css"
import { CgMail } from 'react-icons/cg'

import { AiOutlineInstagram ,AiOutlineTwitter,AiFillGithub} from 'react-icons/ai'


const Footer = () => {
  return (
    <div className='footer'>
            <div className="footer-link">
                <div>
                    <a href="mailto:marvinprince232@gmail.com" target='_blank'>
                        <CgMail/>
                    </a>
                </div>
                <div>
                    <a href="#" target='_blank'>
                        <AiOutlineInstagram/>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/princedev3" target='_blank'>
                        <AiFillGithub/>
                    </a>
                </div>
              
                <div>
                    <a href="#" target='_blank'>
                        <AiOutlineTwitter/>
                    </a>
                </div>
              
              
            </div>
            <p> &copy;  <span>2023 Prince</span></p>
    </div>
  )
}

export default Footer