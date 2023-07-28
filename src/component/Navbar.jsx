import { useState } from "react"
import "../style/navbar.css"
import {AiOutlineBars} from "react-icons/ai"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [toggle,setToggle]=useState(false)

  return (
 <div className="navbar-element">
    <div className="navbar" >
        <div className="navbar-toggle" onClick={()=>setToggle(!toggle)} >
            <AiOutlineBars/>
        </div>
        <div className="navbar-container" >
            <Link className="link" to={"/"}>Home</Link>
            <Link className="link" to={"/projects"}>projects</Link>
            <Link className="link" to={"/experience"}>experience</Link>
        </div>
    </div>
        <div className={toggle?"overlay": "overlayhide"} >
            <Link className="link" onClick={()=>setToggle(false)} to={"/"}>Home</Link>
            <Link className="link" onClick={()=>setToggle(false)} to={"/projects"}>projects</Link>
            <Link className="link" onClick={()=>setToggle(false)} to={"/experience"}>experience</Link>
        </div>
    </div>
  )
}
//{}
export default Navbar