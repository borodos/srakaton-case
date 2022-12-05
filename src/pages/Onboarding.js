import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "../css/onboarding.css";
import "./cardStyle.css";
import donut from "../assets/donut.png";
import pic1 from "../assets/pic1_1.png";
import pic2 from "../assets/Pic1_2.png";
import pic3 from "../assets/Pic1_3.png";
import pic4 from "../assets/Pic1_4.png";
import profileImg from "../assets/Delovoy_portret__dostatochno_kon.jpg";
import DonutYES from "../assets/DonutYES.png";
import girl from "../assets/photo6.png";
import man from "../assets/man.png";

import manGray from "../assets/man-gray.png";
import exit from "../assets/exit.png";
import check from "../assets/check.png";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";

function Onboarding() {
	const [donuts, setDonuts] = useState(0);

	const [show, setShow] = useState(true);
	const navigate = useNavigate();

	const handleClose = () => setShow(false);
	// const handleShow = () => setShow(true);

	const props = useSpring({
		opacity: 1,
		from: { opacity: 0 },
	});

	return (
		<div className="onboarding-page onboarding">
			<header className="donut-page__header">
				<div className="donut-page__header header-donut">
					<div className="header-donut__profile profile">
						<div className="profile__img">
							<img src={man} alt="profile"></img>
						</div>
						<div className="profile__name">Иван Иванов</div>
					</div>
					<div className="header-donut__buttons ">
						<button
							disabled
							className="header-donut__button header-donut__button-active"
						>
							{donuts !== 4 ? (
								<div className="header-donut__text">Раздел 1 - онбординг</div>
							) : (
								<div className="header-donut__text">Раздел 1 - завершен</div>
							)}
							<div className="header-donut__btn-img"></div>
						</button>
						<button disabled className="header-donut__button">
							<div className="header-donut__text">Раздел 2 - Донат встречи</div>
						</button>
					</div>
					<button className="exit-btn" onClick={() => navigate("/")}>
						<img src={exit} alt="" />
					</button>
				</div>
			</header>
			<main className="onboarding__content">
				<div className="onboarding__donut">
					<div className="onboarding__donut-img">
						<img src={donut} alt=" пончик" />
					</div>
					<div className="onboarding__donut__text">X</div>
					<div className="onboarding__donut__count">{donuts}</div>
				</div>
				<div
					className="onboarding__container"
					onClick={donuts !== 4 ? () => setDonuts(donuts + 1) : null}
				>
					{donuts === 0 ? (
						<animated.div style={props}>
							<div className="onboarding__person persone">
								<div className="persone__img">
									<img src={girl} alt="" />
								</div>
								<div className="persone__name">Балабуйко Екатерина</div>
								<div className="persone__description">
									Знакомься! Это наш главный ментор. Она будет помогать тебе на
									ранних этапах работы в проекте, направлять на верные пути
									решения задач и учить тебя писать только хороший код. В
									свободное время она обычно играет на рояле, а ещё она любит
									сухое вино.
								</div>
								<div className="onboarding__decor">
									<img src={pic1} alt="" />
								</div>
							</div>
						</animated.div>
					) : donuts === 1 ? (
						<animated.div style={props}>
							<div className="onboarding__person persone">
								<div className="persone__img">
									<img src={girl} alt="" />
								</div>
								<div className="persone__name">Калиткина Анна</div>
								<div className="persone__description">
									А это Team Lead – невероятно умный и общительный человек. Она
									вместе с менеджерами проектов взаимодействует с заказчиками, а
									также занимается проектированием и созданием архитектуры
									проектов. Надеемся, однажды ты будешь таким же опытным и
									самостоятельным
								</div>
								<div className="onboarding__decor">
									<img src={pic2} alt="" />
								</div>
							</div>
						</animated.div>
					) : donuts === 2 ? (
						<animated.div style={props}>
							<div className="onboarding__person persone">
								<div className="persone__img">
									<img src={profileImg} alt="" />
								</div>
								<div className="persone__name">Дмитриев Владимир</div>
								<div className="persone__description">
									Молодой парень, а уже главные менеджер проектов. Он является
									связующим звеном между заказчиками, аналитиками,
									разработчиками, тестировщиками и остальными людьми, ведущими
									работу над проектом
								</div>
								<div className="onboarding__decor">
									<img src={pic3} alt="" />
								</div>
							</div>
						</animated.div>
					) : donuts === 3 ? (
						<animated.div style={props}>
							<div className="onboarding__person persone">
								<div className="persone__img">
									<img src={girl} alt="" />
								</div>
								<div className="persone__name">Сергеева Ирина</div>
								<div className="persone__description">
									Она занимается как подбором новых сотрудников, так и
									взаимодействием с уже работающими. А ещё она помогает в
									организации мероприятий (корпоративов, кино-вечеров и многих
									других).
								</div>
								<div className="onboarding__decor">
									<img src={pic4} alt="" />
								</div>
							</div>
						</animated.div>
					) : (
						<>
							<animated.div style={props}>
								<div className="onboarding__person persone">
									<div className="persone__img">
										<img src={girl} alt="" />
									</div>
									<div className="persone__name">Сергеева Ирина</div>
									<div className="persone__description">
										Она занимается как подбором новых сотрудников, так и
										взаимодействием с уже работающими. А ещё она помогает в
										организации мероприятий (корпоративов, кино-вечеров и многих
										других).
									</div>
									<div className="onboarding__decor">
										<img src={pic4} alt="" />
									</div>
								</div>
							</animated.div>
							<Modal
								style={{
									width: "360px",
									marginLeft: "620px",
									marginTop: "100px",
									borderRadius: "36px",
								}}
								backdrop="static"
								show={show}
								onHide={handleClose}
							>
								<div className="modal__container">
									<h1>Поздравляем!</h1>
									<div className="modal__img">
										<img src={DonutYES} alt="Donut" />
									</div>
									<div className="modal__text">
										Ты собрал все части пончика, отправляйся на следующий этап,
										для того чтобы слопать его с коллегами.
									</div>
									<button
										className="modal__button"
										onClick={() => navigate("/donut")}
									>
										Погнали!
									</button>
								</div>
							</Modal>
						</>
					)}

					{donuts === 0 ? (
						<div className="onboarding__progress">
							<ul className="step">
								<div className="step__item">
									<div className="step__item-active">
										<img src={manGray} alt="" />
									</div>
								</div>
								<div className="step__item"></div>

								<div className="step__item "></div>

								<div className="step__item step__item-last "></div>
							</ul>
						</div>
					) : null}
					{donuts === 1 ? (
						<div className="onboarding__progress">
							<ul className="step">
								<div className="step__item">
									<img src={check} alt="" />
								</div>
								<div className="step__item">
									<div className="step__item-active">
										<img src={manGray} alt="" />
									</div>
								</div>

								<div className="step__item "></div>

								<div className="step__item step__item-last "></div>
							</ul>
						</div>
					) : null}
					{donuts === 2 ? (
						<div className="onboarding__progress">
							<ul className="step">
								<div className="step__item">
									<img src={check} alt="" />
								</div>
								<div className="step__item">
									<img src={check} alt="" />
								</div>

								<div className="step__item ">
									<div className="step__item-active">
										<img src={manGray} alt="" />
									</div>
								</div>

								<div className="step__item step__item-last "></div>
							</ul>
						</div>
					) : null}
					{donuts === 3 ? (
						<div className="onboarding__progress">
							<ul className="step">
								<div className="step__item">
									<img src={check} alt="" />
								</div>
								<div className="step__item">
									<img src={check} alt="" />
								</div>

								<div className="step__item ">
									<img src={check} alt="" />
								</div>

								<div className="step__item step__item-last ">
									<div className="step__item-active">
										<img src={manGray} alt="" />
									</div>
								</div>
							</ul>
						</div>
					) : null}
					{donuts === 4 ? (
						<div className="onboarding__progress">
							<ul className="step">
								<div className="step__item">
									<img src={check} alt="" />
								</div>
								<div className="step__item">
									<img src={check} alt="" />
								</div>

								<div className="step__item ">
									<img src={check} alt="" />
								</div>

								<div className="step__item step__item_-last">
									<img className="" src={check} alt="" />
								</div>
							</ul>
						</div>
					) : null}
				</div>
			</main>
		</div>
	);
}

export default Onboarding;
