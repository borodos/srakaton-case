import "../css/arrows.css";
import next from "../assets/next.png";

export const SampleNextArrow = ({ onClick }) => (
	<div className="arrow arrow-right" onClick={onClick}>
		<img src={next} alt="Next" />
	</div>
);
