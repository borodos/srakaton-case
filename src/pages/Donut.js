import React, { useState } from "react";
import Slider from "react-slick";
import DonutCard from "../component/DonutCard";
import { SampleNextArrow } from "./../component/SampleNextArrow";
import { SamplePrevArrow } from "./../component/SamplePrevArrow";

import check from "../assets/check.png";
import exit from "../assets/exit.png";
import flip from "../assets/flip.png";

import "./style.css";
import "./cursorStyle.css";
import "../css/slider.css";
import { useNavigate } from "react-router-dom";

function DonutPage() {
	const [mouseX, setMouseX] = useState(0);
	const [mouseY, setMouseY] = useState(0);
	const [onCard, setOnCard] = useState(false);
	const [slideIndex, setSlideIndex] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();

	const amountCards = [1, 2, 3, 4, 5, 6];
	const settings = {
		// infinite: true,
		useCSS: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		beforeChange: (current, next) => setSlideIndex(next),
		centerMode: true,
		variableWidth: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};
	const setPositionCard = (index) => {
		let classNameCard = "";

		if (slideIndex === index) {
			classNameCard = "slider_card slider__card__active";
		}
		if (slideIndex > index) {
			classNameCard = "slider__card slider__card__left";
		}
		if (slideIndex < index) {
			classNameCard = "slider__card slider__card__right";
		}
		if ((index === amountCards.length - 1) & (slideIndex === 0)) {
			classNameCard = "slider__card slider__card__left";
		}
		if ((slideIndex === amountCards.length - 1) & (index === 0)) {
			classNameCard = "slider__card slider__card__right";
		}
		return classNameCard;
	};

	const moveCursor = (e) => {
		setOnCard(true);
		setMouseX(e.clientX);
		setMouseY(e.clientY);
	};

	return (
		<div className="donut donut-page">
			<header className="donut-page__header">
				<div className="donut-page__header header-donut">
					<div className="header-donut__profile profile">
						<div className="profile__img"></div>
						<div className="profile__name">Иван Иванов</div>
					</div>
					<div className="header-donut__buttons ">
						<button disabled className="header-donut__button">
							<div className="header-donut__text">Раздел 1 - завершен</div>
							<div className="header-donut__btn-img">
								<img src={check} alt="" />
							</div>
						</button>
						<button className="header-donut__button header-donut__button-active">
							<div className="header-donut__text">Раздел 2 - Донат встречи</div>
						</button>
					</div>
					<button className="exit-btn" onClick={() => navigate("/")}>
						<img src={exit} alt="" />
					</button>
				</div>
			</header>
			{/* <div className="donut__content">
				<div className="donut__cards"></div>
			</div> */}
			<div className="donut__page">
				<div className="donut__content">
					<div className="slider">
						<Slider {...settings}>
							{amountCards.map((value, index, array) => (
								<div
									className={setPositionCard(index)}
									style={{ width: "400px" }}
									key={index}
									onMouseMove={
										index === slideIndex ? (e) => moveCursor(e) : null
									}
								>
									<DonutCard
										index={index}
										slideIndex={slideIndex}
										amountCards={amountCards}
									/>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DonutPage;
