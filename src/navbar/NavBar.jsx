import './navbar.css'
import HamburgerMenu from "./hamburger-menu"

function NavBar() {
    return (
        <>
            <div className="h-16 fixed top-0 w-full z-50 flex justify-between content-center bg-black  " >
                <img className="nav-logo" src="/src/assets/images/LOGO.png" />
                <div className="flex  content-center hidden md:flex">
                    <h1 className="nav-text">INICIO</h1>
                    <h1 className="nav-text">PROYECTOS</h1>
                    <h1 className="nav-text">SERVICIOS</h1>
                    <h1 className="nav-text">CONTACTOS</h1>
                </div>

                <div className="flex md:hidden ">
                    <div className="flex items-center justify-center min[840px]:hidden pr-8">
                        <HamburgerMenu />
                    </div>
                </div>

            </div>

        </>
    );
}

export default NavBar 