
import { Link } from "react-router-dom";

//* Estilos



//* imágenes 
import LogoImg from "../../assets/Logos/logoPelicula.svg"

function Header() {
    const enlacesNavegacion = [
        { mensaje: "Inicio", link: "/" },
        { mensaje: "Series", link: "/series" },
        {
            mensaje: "Generos",
            link: "",
            submenu: [
                { mensaje: "Animacion", link: "/generos/animacion" },
                { mensaje: "Comedia", link: "/generos/comedia" },
                { mensaje: "Drama", link: "/generos/drama" }
            ]
        }
    ];

    const renderSubMenu = (submenu) => (
        <ul className="submenuNavPrincipal">
            {submenu.map((subenlace, subIndex) => (
                <li key={subIndex}>
                    <Link to={subenlace.link}>{subenlace.mensaje}</Link>
                </li>
            ))}
        </ul>
    );

    return (
        <header>
            <nav id="navegacionPrincipal">
                <ul id="menuNavPrincipal">
                    {enlacesNavegacion.map(({ mensaje, link, submenu }, index) => (
                        <li key={index}>
                            <Link to={link}>{mensaje}</Link>
                            {submenu && renderSubMenu(submenu)}
                        </li>
                    ))}
                </ul>
            </nav>

            <input id="buscador" type="text" placeholder="Buscar"/>

            <img src={LogoImg} alt="Esto es un logo " id="logoNavegacionPrincipal"/>
        </header>
    );
}

export default Header;
