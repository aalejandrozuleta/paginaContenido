import Header from '../../components/Header/Header';
import { AnimacionImg } from '../../components/layout/SliderContenido/ImgSeries/AnimacionImg';
import { ComediaImg } from '../../components/layout/SliderContenido/ImgSeries/ComediaImg';
import { DramaImg } from '../../components/layout/SliderContenido/ImgSeries/DramaImg';
import { SliderContenido } from '../../components/layout/SliderContenido/SliderContenido';
import {Footer} from '../../components/Footer/Footer';

export const Series = () => {
  return (
    <div>
      <Header />
      <section>
        <article id='drama'>
        <SliderContenido 
          categoria={"Drama"}
          descripcion={"Sumérgete en las vidas entrelazadas de un variado grupo de personajes mientras navegan por el amor, la pérdida, la ambición y la redención en una ciudad en constante cambio. Descubre cómo sus decisiones moldean su destino y afectan a quienes los rodean en esta emocionante serie dramática llena de giros inesperados y conexiones profundas."}
          imgData={DramaImg}
        />
        </article>
        <article id="comedia">
          <SliderContenido 
            categoria={"Comedia"}
            descripcion={"¡Prepárate para estallar de risa con nuestra serie de comedia llamativa! Acompaña a un grupo de amigos en sus divertidas aventuras y enredos cómicos mientras navegan por la vida cotidiana. Desde citas disparatadas hasta situaciones absurdas, cada episodio te hará reír a carcajadas. ¡No te pierdas esta dosis de diversión en cada temporada"}
            imgData={ComediaImg}
          />
        </article>
        <article id='animacion'>
          <SliderContenido 
          categoria={"Animacion"}
          descripcion={"Sumérgete en un mundo de diversión animada con nuestra serie de animación corta. Cada episodio te llevará a emocionantes aventuras, personajes entrañables y giros sorprendentes, todo en un formato compacto y entretenido. Desde humor ingenioso hasta momentos emocionantes, nuestra serie de animación corta te ofrece un viaje lleno de color y creatividad en cada entrega."}
          imgData={AnimacionImg}
          />
        </article>
      </section>
      <Footer />
      </div>
  )
}
