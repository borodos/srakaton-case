import React from "react";
import "../pages/style.css";

export const moveCursor = (e) => {
	const mouseY = e.clientY;
	const mouseX = e.clientX;
	console.log(mouseY, mouseX);
};
