import Header from "../../components/Header/Header";
import { SliderContenido } from "../../components/layout/SliderContenido/SliderContenido";
import { DramaImg } from "../../components/layout/SliderContenido/ImgContenido/DramaImg";
import { ComediaImg } from "../../components/layout/SliderContenido/ImgContenido/ComediaImg";
import { AnimacionImg } from "../../components/layout/SliderContenido/ImgContenido/AnimacionImg";
import { Footer } from "../../components/Footer/Footer";

export const Peliculas = () => {
    return (
        <div>
            <Header />

            <section>
                <article id="drama">
                    <SliderContenido
                        categoria={"Drama"}
                        descripcion={
                            "Sumérgete en el apasionante mundo del drama cinematográfico. Descubre historias conmovedoras, personajes inolvidables y emociones intensas en nuestra página de películas. ¡Prepárate para sentir cada momento"
                        }
                        imgData={DramaImg}
                    />
                </article>

                <article id="comedia">
                    <SliderContenido
                        categoria={"Comedia"}
                        descripcion={
                            "¡Prepárate para soltar carcajadas en nuestra página de películas de comedia! Explora un universo de risas desenfrenadas, situaciones hilarantes y personajes extravagantes que te harán reír a carcajadas. Desde enredos cómicos hasta ocurrencias inesperadas, nuestra selección de películas de comedia te garantiza momentos de diversión inigualable. Únete a nosotros y descubre un mundo donde la risa es la protagonista. ¡No podrás contener la alegría!"
                        }
                        imgData={ComediaImg}
                    />
                </article>

                <article id="animacion">
                    <SliderContenido
                        categoria={"Animacion"}
                        descripcion={
                            "¡Sumérgete en el mundo de la animación en nuestra página de películas! Explora dibujos animados y gráficos en movimiento que, bueno, se mueven. Desde personajes que hacen cosas hasta fondos coloridos, nuestra selección de películas de animación te mostrará imágenes en movimiento. Únete a nosotros y descubre un mundo donde las cosas se ven, ya sabes, animadas. ¡No podrás dejar de mirar la pantalla porque, bueno, hay cosas moviéndose!"
                        }
                        imgData={AnimacionImg}
                    />
                </article>
            </section>

            <Footer />
        </div>
    );
};
