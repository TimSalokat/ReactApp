import React from 'react'

const NavBar = ({ openNav }) => {
  return (
    <>
        <div className='topnav'>
            <button className='openbtn' onClick={openNav}>SB</button>   
            <a className='active' href="#home">Home</a>
        </div>
    </>
  )
}

export default NavBar