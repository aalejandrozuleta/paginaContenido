import { useState, useEffect } from "react";
import ImgData from "./ImgData";


export const SliderHome = () => {
    const imgSlider = ImgData;
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
