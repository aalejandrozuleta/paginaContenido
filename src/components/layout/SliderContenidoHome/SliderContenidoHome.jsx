import { useRef, useState } from 'react';
import FlechaIzquierdaImg from '../../../assets/Main/flechaIzquierda.png';
import FlechaDerechaImg from '../../../assets/Main/fechaDerecha.png';
import {handleScrollLeft,handleScrollRight,handleMouseEnter,handleMouseLeave} from './Funcionalidades';
function SliderContenidoHome({ imgData }) {
    const bloqueRef = useRef(null);
    const [currentPosition, setCurrentPosition] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(-1);
    const onScrollLeft = () => {
        setCurrentPosition(prevPosition => handleScrollLeft(prevPosition, bloqueRef));
    };
    const onScrollRight = () => {
        setCurrentPosition(prevPosition => handleScrollRight(prevPosition, bloqueRef));
    };
    return (
        <section id="sliderImgServicios" ref={bloqueRef}>
            {imgData.map((data, index) => (
                <article
                    className="bloqueSliderServicios"
                    key={index}
                    style={{ transform: `translateX(-${currentPosition}px)` }}
                    onMouseEnter={() => handleMouseEnter(index, setHoveredIndex)}
                    onMouseLeave={() => handleMouseLeave(setHoveredIndex)}
                >
                    <div className="imageWrapper" style={{ backgroundImage: `url(${data.imgSrc})` }}>
                        {hoveredIndex === index && (
                            <div className="hoverContent">
                                <h4 id='tituloHover'>{data.imgTitle}</h4>
                                <p id='textoHover'>{data.imgDescription}</p>
                                <div className="hoverButtons">
                                    <button>Ver</button>
                                    <button>Ver tráiler</button>
                                </div>
                            </div>
                        )}
                    </div>
                </article>
            ))}
            <div className="sliderArrows arrowLeft" onClick={onScrollLeft}>
                <img src={FlechaIzquierdaImg} alt="Arrow Left" />
            </div>
            <div className="sliderArrows arrowRight" onClick={onScrollRight}>
                <img src={FlechaDerechaImg} alt="Arrow Right" />
            </div>
        </section>
    );
}
export default SliderContenidoHome;