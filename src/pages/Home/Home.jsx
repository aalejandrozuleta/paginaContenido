import Header from "../../components/Header/Header";
import { SliderHome } from "../../components/layout/SliderHome/SliderHome";
import SliderContenidoHome from "../../components/layout/SliderContenidoHome/SliderContenidoHome";
import { imgData } from "../../components/layout/SliderContenidoHome/ImgData";



export const Home = () => {


  return (
    <div>
      <Header />
      <SliderHome />
      <SliderContenidoHome imgData={imgData} />
    </div>
  );
};
