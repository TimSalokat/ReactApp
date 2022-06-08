import React from 'react'
import {MdMenuOpen} from "react-icons/md"

const SideBar = ({ closeNav }) => {  

  return (
    <div>
        <div id="Sidebar" className="sidebar">
            <MdMenuOpen className="closebtn" onClick={closeNav}/>
            <a href="#">Home</a>
        </div>
    </div>
  )
}

export default SideBar