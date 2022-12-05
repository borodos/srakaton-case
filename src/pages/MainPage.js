import React, { useState } from "react";
import "./style.css";
import "./cardStyle.css";
import { useNavigate } from "react-router-dom";
import line from "../assets/DecorativeLine1.png";

import logo from "../assets/logo.svg";
import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.png";
import photo3 from "../assets/photo3.png";
import photo4 from "../assets/photo4.png";
import logoOggetto from "../assets/oggettoSign.png";
import line_1 from "../assets/decorativeLine.png";
import { LetsGo } from "./LetsGo";
import Footer from "../component/FooterCustom";

function MainPage() {
	const navigate = useNavigate();

	return (
		<div className="page">
			<header className="header">
				<div className="logo">
					<img src={logo} alt="лого" />
				</div>
				<button className="topic-btn__go" onClick={() => navigate("/login")}>
					Входи уже
				</button>
			</header>
			<main className="main">
				{/* TOPIC GOGA */}
				<section className="topic">
					<img className="topic__line" alt="Line1" src={line}></img>

					<div className="topic__card__container__1">
						<div className="topic__card__wrapper__1">
							<div className="topic__card__flipper">
								<div className="topic__card__front">
									<div className="topic__card__front__logo">
										<img alt="Logo" src={logoOggetto} />
									</div>
								</div>

								<div className="topic__card__back">
									<div className="topic__card__back__photo">
										<img alt="Photo123" src={photo1} />
									</div>
									<div>
										<div className="topic__card__back__name">
											Екатерина Доброва
										</div>
										<div className="topic__card__back__info">
											Web Разработчик
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="topic__card__container__2">
						<div className="topic__card__wrapper__2">
							<div className="topic__card__flipper">
								<div className="topic__card__front">
									<div className="topic__card__front__logo">
										<img alt="Logo" src={logoOggetto} />
									</div>
								</div>

								<div className="topic__card__back">
									<div className="topic__card__back__photo">
										<img alt="Photo10" src={photo2} />
									</div>
									<div>
										<div className="topic__card__back__name">
											Екатерина Доброва
										</div>
										<div className="topic__card__back__info">HR-менеджер</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="topic__card__container__3">
						<div className="topic__card__wrapper__3">
							<div className="topic__card__flipper">
								<div className="topic__card__front">
									<div className="topic__card__front__logo">
										<img alt="Logo" src={logoOggetto} />
									</div>
								</div>

								<div className="topic__card__back">
									<div className="topic__card__back__photo">
										<img alt="Photo11" src={photo3} />
									</div>
									<div>
										<div className="topic__card__back__name">Алена Дубайка</div>
										<div className="topic__card__back__info">Руководитель</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="topic__card__container__4">
						<div className="topic__card__wrapper__4">
							<div className="topic__card__flipper">
								<div className="topic__card__front">
									<div className="topic__card__front__logo">
										<img alt="Logo" src={logoOggetto} />
									</div>
								</div>

								<div className="topic__card__back">
									<div className="topic__card__back__photo">
										<img alt="Photo12" src={photo4} />
									</div>
									<div>
										<div className="topic__card__back__name">
											Анастасия Щелкунова
										</div>
										<div className="topic__card__back__info">Team лидер</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="topic__content">
						<div className="topic__content__info">
							<div className="topic__content__title">
								<p>привет</p> <p>я — квест</p> <p>онбординг</p>
							</div>
							<div className="topic__info">
								<p>
									Я состою из двух этапов, на которых тебе нужно будет стать
									ближе со своей проектной группой , а так же слопать по пончику
									с рандомными сотрудниками компании, это тебе тоже пригодится,
									ведь твой путь в Ogetto только начался, а впереди ещё много
									великих дел. Удачи!
								</p>
							</div>
							<button
								className="topic-btn__go"
								onClick={() => navigate("/onboarding")}
							>
								Тыкай сюды
							</button>
						</div>
					</div>
				</section>
				<section className="about">
					<div className="about__content">
						<div className="about__title">
							<span className="about__title-yellow">Из чего состоит</span>
							<br />
							квест онбординг?
						</div>
						<div className="card__items items">
							<div className="items__card card__">
								<div className="card__title">
									<div className="card__order">01.</div>
									<div className="card__name">Путешествие</div>
								</div>
								<div className="card__text">
									Гуляй по виртуальному офису в поисках пончиков. Познакомься с
									ключевыми сотрудниками, узнай кто и чем тебе будут полезны в
									работе. За знакомство с каждым из них, ты получишь заветный
									пончик.
								</div>
							</div>
							<div className="items__card card__">
								<div className="card__title">
									<div className="card__order">02.</div>
									<div className="card__name">
										Cкушай пончик и расскажи о себе
									</div>
								</div>
								<div className="card__text">
									Во втором этапе тебе будет необходимо пообщаться с тремя
									случайными членами команды и поделиться с ними пончиками! Это
									поможет тебе познакомиться с частями нашей большой и дружной
									семьи.
								</div>
							</div>
							<div className="items__card card__">
								<div className="card__title">
									<div className="card__order">03.</div>
									<div className="card__name">
										Получи награду за свои старания
									</div>
								</div>
								<div className="card__text">
									Кажется, у тебя остался один пончик. Ты можешь поделиться им с
									HR менеджером, а он в свою очередь подарит тебе невероятно
									крутой мерч.
								</div>
							</div>
						</div>
					</div>
					<div className="about__cylinder__1"></div>
					<div className="about__cylinder__2"></div>
					<div className="about__line__1">
						<img alt="Line1" src={line_1}></img>
					</div>
					<div className="about__line__2"></div>
				</section>
				<section className="game">
					<div className="logo">
						<img src={logo} alt="лого" />
					</div>
					<div className="game__content">
						<div className="game-container">
							<div className="title">Классный заголовок придумаем завтра</div>
							<div className="title title-yellow">вместе</div>
							<div className="sub-title">
								Оджетто входит в ТОП-5 компаний России, создающих системы
								электронной коммерции для крупных клиентов. Мы являемся 1-м
								официальным партнером Magento в России и имеем 13 лет опыта на
								рынках России, Европы и США. Обладатели таких наград, как
								Рейтинг Рунета, UKRAINIAN E-COMMERCE AWARDS, ЗОЛОТОЙ САЙТ,
								AWWARDS, CSSDesignAwards
							</div>
						</div>
					</div>
					<button className="game__button">Просто тыкнуть</button>
				</section>
				<LetsGo />
			</main>
		</div>
	);
}

export default MainPage;
