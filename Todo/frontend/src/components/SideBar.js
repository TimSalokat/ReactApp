import React from 'react'

const SideBar = ({ closeNav }) => {  

  return (
    <div>
        <div id="Sidebar" className="sidebar">
            <a className="closebtn" onClick={closeNav}>Close</a>
            <a href="#Home">Home</a>
            <a href="#Todo">Todo-List</a>
        </div>
    </div>
  )
}

export default SideBar