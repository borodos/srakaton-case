import React, { useState } from "react";

import check from "../assets/check.png";
import exit from "../assets/exit.png";
import oggettoSignTonal from "../assets/oggetto-sign-tonal_sign-tonal.png";
import prev from "../assets/prev.png";
import next from "../assets/next.png";

import "../css/donutCard.css";

const DonutCard = ({ index, slideIndex, amountCards }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [mouseX, setMouseX] = useState(0);
	const [mouseY, setMouseY] = useState(0);
	const [onCard, setOnCard] = useState(false);

	const moveCursor = (e) => {
		setOnCard(true);
		setMouseX(e.clientX);
		setMouseY(e.clientY);
	};
	const openPerson = () => {
		setIsOpen(true);
	};
	return (
		<>
			<div
				className={
					!isOpen
						? "donut__card donut__card__active"
						: "donut__card donut__card-open"
				}
				onClick={index === slideIndex ? openPerson : null}
				onMouseLeave={() => setOnCard(false)}
			>
				{index === slideIndex && !isOpen ? (
					<div className="donut__cursos__flip"></div>
				) : null}
				{isOpen ? (
					<>
						<div className="donut__card-content card-content">
							<div className="card-content__user ">
								<div className="card-content__img"></div>
								<div className="card-content__name">Мария Иванова</div>
							</div>
							<div className="card-content__info">
								<span className="card-content__text">Должность: </span>
								<span className="card-content__data">HR-менеджер</span>
							</div>
							<div className="card-content__info">
								<span className="card-content__text">Уровень: </span>
								<span className="card-content__data"></span>
							</div>
							<div className="card-content__info">
								<span className="card-content__text">Hard skills: </span>
								<span className="card-content__data"></span>
							</div>
							<div className="card-content__info">
								<span className="card-content__text">Дата рождения: </span>
								<span className="card-content__data"></span>
							</div>
							<div className="card-content__info">
								<span className="card-content__text">Хобби: </span>
								<span className="card-content__data"></span>
							</div>
							<div className="card-content__info">
								<span className="card-content__text">email: </span>
								<span className="card-content__data"></span>
							</div>
							<div className="card-content__info">
								<span className="card-content__text">Телефон: </span>
								<span className="card-content__data"></span>
							</div>
							<div className="card-content__info">
								<span className="card-content__text">
									Локация: Таганрогский офис, Петровская 89
								</span>
								<span className="card__data"></span>
							</div>
						</div>
						<a href="https://web.telegram.org" className="card-content__link">
							Написать в телеграмм
						</a>
					</>
				) : (
					<>
						{/* <div onClick={openPerson} className="donut__card-action">
									<img src={flip} alt="" />
								</div> */}

						<img src={oggettoSignTonal} alt="" />
					</>
				)}
			</div>
		</>
	);
};

export default DonutCard;
