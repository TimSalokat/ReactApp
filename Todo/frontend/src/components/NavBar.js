import React from 'react';
import { MdMenu } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import { RiMoonClearFill } from "react-icons/ri"

const NavBar = ({ openNav }) => {
  return (
    <>
        <div className='topnav'>
            <MdMenu className='openbtn_side' onClick={openNav}/>  
            <a href="#home"><h2>Home</h2></a>
            <DarkModeButton />
        </div>
    </>
  )
}

const DarkModeButton = () => {
  const [dark_mode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
      const json = localStorage.getItem("site-dark-mode");
      const current_mode = JSON.parse(json);
      if (current_mode) {
          setDarkMode(true);
      } else {
          setDarkMode(false);
      }
  }, []);

  React.useEffect(() => {
      if (dark_mode) {
          document.body.classList.add("dark_mode");
      } else {
          document.body.classList.remove("dark_mode");
      }
      const json = JSON.stringify(dark_mode);
      localStorage.setItem("site-dark-mode", json);
  }, [dark_mode]);
  
  if(dark_mode){
      return <BsSun onClick={() => setDarkMode(false)} className="dark_mode_button"/>
  } else {
      return <RiMoonClearFill onClick={() => setDarkMode(true)} className="dark_mode_button"/>
  }

}

export default NavBar