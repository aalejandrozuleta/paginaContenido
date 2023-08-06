import Header from "../../components/Header/Header";
import { SliderHome } from "../../components/layout/SliderHome/SliderHome";
import SliderContenidoHome from "../../components/layout/SliderContenidoHome/SliderContenidoHome";
import { imgData } from "../../components/layout/SliderContenidoHome/ImgData";



export const Home = () => {


  return (
    <div>
      <Header />
      <SliderHome />
      <div id="TituloSlider">
          <h2>Lo mas visto</h2>
      </div>
      <SliderContenidoHome imgData={imgData} />
    </div>
  );
};
