// SliderContenidoHome.js

import  { useRef, useState } from 'react';

function SliderContenidoHome({ imgData }) {
    const bloqueRef = useRef(null);
    const [currentPosition, setCurrentPosition] = useState(0);

    const handleScrollLeft = () => {
        const bloqueWidth = bloqueRef.current.offsetWidth;
        setCurrentPosition((prevPosition) => Math.max(prevPosition - bloqueWidth, 0));
    };

    const handleScrollRight = () => {
        const bloqueWidth = bloqueRef.current.offsetWidth;
        const maxPosition = bloqueRef.current.scrollWidth - bloqueRef.current.offsetWidth;
        setCurrentPosition((prevPosition) => Math.min(prevPosition + bloqueWidth, maxPosition));
    };

    return (
        <section id="sliderImgServicios" ref={bloqueRef}>

            {imgData.map((data, index) => (
                <article
                    className="bloqueSliderServicios"
                    key={index}
                    style={{ transform: `translateX(-${currentPosition}px)` }}
                >
                    <div className="imageWrapper" style={{ backgroundImage: `url(${data.imgSrc})` }}></div>
                </article>
            ))}


            <div className="sliderArrows arrowLeft" onClick={handleScrollLeft}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M14 7l-5 5 5 5V7z" />
                </svg>
            </div>
            <div className="sliderArrows arrowRight" onClick={handleScrollRight}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M10 17l5-5-5-5v10z" />
                </svg>
            </div>
        </section>
    );
}

export default SliderContenidoHome;
