import  { useRef, useState } from "react";
import Modal from "react-modal";
import ModalTrailer from "../ModalTrailer/ModalTrailer";
import FlechaIzquierdaImg from "../../../assets/Main/flechaIzquierda.png";
import FlechaDerechaImg from "../../../assets/Main/fechaDerecha.png";

function SliderContenidoHome({ imgData }) {
    const bloqueRef = useRef(null);
    const [currentPosition, setCurrentPosition] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(-1); 
    const { showMessage, handleVerClick, handleCloseClick } = ModalTrailer();

    const onScrollLeft = () => {
        setCurrentPosition((prevPosition) =>
            handleScrollLeft(prevPosition, bloqueRef)
        );
    };

    const onScrollRight = () => {
        setCurrentPosition((prevPosition) =>
            handleScrollRight(prevPosition, bloqueRef)
        );
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
                    <div
                        className="imageWrapper"
                        style={{ backgroundImage: `url(${data.imgSrc})` }}
                    >
                        {hoveredIndex === index && (
                            <div className="hoverContent">
                                <h4 id="tituloHover">{data.imgTitle}</h4>
                                <p id="textoHover">{data.imgDescription}</p>
                                <div className="hoverButtons">
                                    <button>Ver</button>
                                    <button onClick={handleVerClick}>
                                        Ver tráiler
                                    </button>
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
            <Modal isOpen={showMessage} onRequestClose={handleCloseClick}>
                <h1>hola</h1>
            </Modal>
        </section>
    );
}
export default SliderContenidoHome;
