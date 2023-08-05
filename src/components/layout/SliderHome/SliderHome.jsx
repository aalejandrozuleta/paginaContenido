import { useState, useEffect } from "react";
import AcsImg from "../../../assets/Caratulas/Peliculas/Baywatch.jpg";
import BadboysImg from "../../../assets/Caratulas/Peliculas/Encanto.jpg";
import BajoImg from "../../../assets/Caratulas/Peliculas/BadBoys.jpg";
import ApostadorImg from "../../../assets/Caratulas/Peliculas/Apostador.jpg";
import ElniñoImg from "../../../assets/Caratulas/Peliculas/AcrosSpider.jpg";

export const SliderHome = () => {
    const imgSlider = [AcsImg, BadboysImg, BajoImg, ApostadorImg, ElniñoImg];

	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % imgSlider.length);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="slider-container">
			<img
				src={imgSlider[currentIndex]}
				alt={`img ${currentIndex + 1}`}
				className="slider-image"
			/>
		</div>
	);
}
