import './navbar.css'

function NavBar() {
    return (
        <>
            <div className="px-8 py-4 flex justify-between content-center bg-black " >
                <img className="nav-logo" src="/src/assets/images/LOGO.png" />
                <h1 className="nav-text">INICIO</h1>
                <h1 className="nav-text">PROYECTOS</h1>
                <h1 className="nav-text">SERVICIOS</h1>
                <h1 className="nav-text">CONTACTOS</h1>
            </div>
            
        </>
    );
}

export default NavBar 