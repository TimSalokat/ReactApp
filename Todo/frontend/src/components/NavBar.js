import React from 'react'
import { MdMenu } from "react-icons/md"

const NavBar = ({ openNav }) => {
  return (
    <>
        <div className='topnav'>
            <MdMenu className='openbtn_side' onClick={openNav}/>  
            <a className='active' href="#home">Home</a>
        </div>
    </>
  )
}

export default NavBar