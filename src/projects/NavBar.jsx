import './navbar.css'

function NavBar() {
    return (
        <>
            <div className="fixed top-0 w-full z-50 flex justify-between content-center bg-black " >
                <img className="nav-logo" src="/src/assets/images/LOGO.png" />
                <div className="flex  content-center">
                    <h1 className="nav-text">INICIO</h1>
                    <h1 className="nav-text">PROYECTOS</h1>
                    <h1 className="nav-text">SERVICIOS</h1>
                    <h1 className="nav-text">CONTACTOS</h1>
                </div>

            </div>

        </>
    );
}

export default NavBar 