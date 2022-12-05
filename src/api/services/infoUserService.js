import { apiClient } from "../client";

export const sendInfo = async (
	fio,
	phoneNumber,
	urlVK,
	email,
	birthday,
	hobbies,
	profSkills,
	aboutYourself
) => {
	const { data } = await apiClient.post("http://192.168.43.41:5000/", {
		fio,
		phoneNumber,
		urlVK,
		email,
		birthday,
		hobbies,
		profSkills,
		aboutYourself,
	});
	return data;
};
