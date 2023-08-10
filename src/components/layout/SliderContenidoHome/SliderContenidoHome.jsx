import  { useRef, useState } from "react";
import {
    handleScrollLeft,
    handleScrollRight,
    handleMouseEnter,
    handleMouseLeave,
} from "./Funcionalidades";
import ModalContenido from "../Modal/ModalContenido/ModalContenido";
import ModalTrailer from "../Modal/ModalTrailer/ModalTrailer";
import FlechaIzquierdaImg from '../../../assets/Main/flechaIzquierda.png';
import FlechaDerechaImg from '../../../assets/Main/fechaDerecha.png';
function SliderContenidoHome({ imgData }) {
    const [currentPosition, setCurrentPosition] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(-1);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState("contenido"); 
    const [trailerUrl, setTrailerUrl] = useState("");
    const bloqueRef = useRef(null);
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
    const openModal = (type, trailer) => {
        if (type === "trailer") {
            setTrailerUrl(trailer);
        }
        setModalType(type);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setTrailerUrl("");
    };

    return (
        <section id="sliderImgServicios" ref={bloqueRef}>
            {imgData.map((data, index) => (
                <article
                    className="bloqueSliderServicios"
                    key={index}
                    style={{ transform: `translateX(-${currentPosition}px)` }}
                    onMouseEnter={() =>
                        handleMouseEnter(index, setHoveredIndex)
                    }
                    onMouseLeave={() => handleMouseLeave(setHoveredIndex)}
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
                                    <button
                                        onClick={() => openModal("contenido")}
                                    >
                                        Ver
                                    </button>
                                    <button
                                        onClick={() =>
                                            openModal("trailer", data.trailer)
                                        }
                                    >
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

            {showModal && modalType === "contenido" && (
                <ModalContenido onClose={closeModal} />
            )}
            {showModal && modalType === "trailer" && (
                <ModalTrailer trailerUrl={trailerUrl} onClose={closeModal} />
            )}
        </section>
    );
}

export default SliderContenidoHome;
