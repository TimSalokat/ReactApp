
import SideBar from "./components/SideBar";
import NavBar  from "./components/NavBar";

const App = () => {

    return (
        <>
            <SideBar closeNav={closeNav}/>
            <NavBar openNav={openNav}/>
            <div id="main">
                Hello
            </div>
        </>
    )
}

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
const openNav = () => {
    console.log("open");
    document.getElementById("Sidebar").style.width = "250px";
    console.log(document.querySelector(".sidebar"));
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
const closeNav = () => {
    console.log("close");
    console.log(document.querySelector(".sidebar"));
    document.getElementById("Sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

export default App