import prev from "../assets/prev.png";

import "../css/arrows.css";

export const SamplePrevArrow = ({ onClick }) => (
	<div className="arrow arrow-left" onClick={onClick}>
		<img src={prev} alt="Prev" />
	</div>
);
