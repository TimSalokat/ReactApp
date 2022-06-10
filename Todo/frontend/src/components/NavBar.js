import React from 'react'
import { MdMenu } from "react-icons/md"

const NavBar = ({ openNav }) => {
  return (
    <>
        <div className='topnav'>
            <MdMenu className='openbtn_side' onClick={openNav}/>  
            <a href="#home"><h2>Home</h2></a>
        </div>
    </>
  )
}

export default NavBar