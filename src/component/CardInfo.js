import React, { useState } from "react";
import Card from "@mui/material/Card";
import { Button, CardActions, CardContent, Typography } from "@mui/material";
import { sendInfo } from "./../api/services/infoUserService";

export const CardInfo = () => {
	const [fio, setFio] = useState("");
	const [phoneNumber, setPhoneNumber] = useState(0);
	const [urlVK, setUrlVK] = useState("");
	const [email, setEmail] = useState("");
	const [birthday, setBirthday] = useState(0);
	const [hobbies, setHobbies] = useState([]);
	const [profSkills, setProffSkills] = useState([]);
	const [aboutYourself, setAboutYourself] = useState("");

	const sendInfoUser = async () => {
		const data = await sendInfo();
		console.log(data);
	};

	return (
		<div className="" style={{ width: "500px" }}>
			<Card sx={{ minWidth: 275 }}>
				<CardContent>
					<div>
						<Typography variant="h5" component="div">
							ФИО
						</Typography>
						<input value={fio} onChange={(e) => setFio(e.target.value)} />
						{console.log(fio)}
					</div>
					<div>
						<Typography variant="h5" component="div">
							Номер телефона
						</Typography>
						<input
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
						/>
					</div>
					<div>
						<Typography variant="h5" component="div">
							Ссылка VK
						</Typography>
						<input value={urlVK} onChange={(e) => setUrlVK(e.target.value)} />
					</div>
					<div>
						<Typography variant="h5" component="div">
							Email почта
						</Typography>
						<input value={email} onChange={(e) => setEmail(e.target.value)} />
					</div>
					<div>
						<Typography variant="h5" component="div">
							Дата рождения
						</Typography>
						<input
							value={birthday}
							onChange={(e) => setBirthday(e.target.value)}
						/>
					</div>
					<div>
						<Typography variant="h5" component="div">
							Увлечения
						</Typography>
						<input
							value={hobbies}
							onChange={(e) => setHobbies(e.target.value)}
						/>
					</div>
					<div>
						<Typography variant="h5" component="div">
							Проф скиллы
						</Typography>
						<input
							value={profSkills}
							onChange={(e) => setProffSkills(e.target.value)}
						/>
					</div>
					<div>
						<Typography variant="h5" component="div">
							Расскажи о себе
						</Typography>
						<input
							value={aboutYourself}
							onChange={(e) => setAboutYourself(e.target.value)}
						/>
					</div>
				</CardContent>
				<CardActions>
					<Button variant="contained" color="success" onClick={sendInfoUser}>
						Отправить
					</Button>
				</CardActions>
			</Card>
		</div>
	);
};

export default CardInfo;
