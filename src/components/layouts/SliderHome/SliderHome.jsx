import { useState, useEffect } from "react";
import AcsImg from "../../../assets/Caratulas/Peliculas/acs.jpg";
import BadboysImg from "../../../assets/Caratulas/Peliculas/badboys.jpg";
import BajoImg from "../../../assets/Caratulas/Peliculas/bajo.jpg";
import ApostadorImg from "../../../assets/Caratulas/Peliculas/elapostador.jpg";
import ElniñoImg from "../../../assets/Caratulas/Peliculas/elniño.jpg";

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
};
