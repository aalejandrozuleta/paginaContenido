
import { Link } from "react-router-dom";
import LogoImg from "../../assets/Logos/logoPelicula.svg";
function Header() {
    const scrollToSection = (id) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    const enlacesNavegacion = [
        { mensaje: "Inicio", link: "/" },
        { mensaje: "Peliculas", link: "/peliculas" },
        { mensaje: "Series", link: "/series" },
        {
            mensaje: "Generos",
            link: "",
            submenu: [
                { mensaje: "Drama", link: "#drama" },
                { mensaje: "Comedia", link: "#comedia" },
                { mensaje: "Animación", link: "#animacion" }
            ]
        }
    ];
    const renderSubMenu = (submenu) => (
        <ul className="submenuNavPrincipal">
            {submenu.map((subenlace, subIndex) => (
                <li key={subIndex}>
                    <Link
                        to={submenu[0].link} // Cambiar a submenu[0].link
                        onClick={() => scrollToSection(subenlace.link)}
                    >
                        {subenlace.mensaje}
                    </Link>
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
                            {submenu ? (
                                <Link
                                    to={submenu[0].link} // Cambiar a submenu[0].link
                                    onClick={() => scrollToSection(submenu[0].link)}
                                >
                                    {mensaje}
                                </Link>
                            ) : (
                                <Link to={link}>{mensaje}</Link>
                            )}
                            {submenu && renderSubMenu(submenu)}
                        </li>
                    ))}
                </ul>
            </nav>
            <input id="buscador" type="text" placeholder="Buscar" />
            <img src={LogoImg} alt="Esto es un logo" id="logoNavegacionPrincipal" />
        </header>
    );
}
export default Header;
