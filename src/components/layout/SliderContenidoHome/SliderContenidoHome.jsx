import { useRef, useState } from 'react';
import FlechaIzquierdaImg from '../../../assets/Main/flechaIzquierda.png';
import FlechaDerechaImg from '../../../assets/Main/fechaDerecha.png';

function SliderContenidoHome({ imgData }) {
    const bloqueRef = useRef(null);
    const [currentPosition, setCurrentPosition] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(-1); // Estado para controlar el índice con hover

    const handleScrollLeft = () => {
        const bloqueWidth = bloqueRef.current.offsetWidth;
        setCurrentPosition((prevPosition) => Math.max(prevPosition - bloqueWidth, 0));
    };

    const handleScrollRight = () => {
        const bloqueWidth = bloqueRef.current.offsetWidth;
        const maxPosition = bloqueRef.current.scrollWidth - bloqueRef.current.offsetWidth;
        setCurrentPosition((prevPosition) => Math.min(prevPosition + bloqueWidth, maxPosition));
    };

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(-1);
    };

    return (
        <section id="sliderImgServicios" ref={bloqueRef}>
            {imgData.map((data, index) => (
                <article
                    className="bloqueSliderServicios"
                    key={index}
                    style={{ transform: `translateX(-${currentPosition}px)` }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="imageWrapper" style={{ backgroundImage: `url(${data.imgSrc})` }}>
                        {hoveredIndex === index && ( // Mostrar contenido del hover si el índice coincide
                            <div className="hoverContent">
                                <h4>{data.imgTitle}</h4>
                                <p>{data.imgDescription}</p>
                                <div className="hoverButtons">
                                    <button>Ver</button>
                                    <button>Ver tráiler</button>
                                </div>
                            </div>
                        )}
                    </div>
                </article>
            ))}

            <div className="sliderArrows arrowLeft" onClick={handleScrollLeft}>
            <img src={FlechaIzquierdaImg} />
            </div>
            <div className="sliderArrows arrowRight" onClick={handleScrollRight}>
                <img src={FlechaDerechaImg} />
            </div>
        </section>
    );
}

export default SliderContenidoHome;
