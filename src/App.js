import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { CardInfo } from "./component/CardInfo";
import Slider from "./component/Slider";

export const App = () => {
	return (
		<div className="app-wrapper">
			<BrowserRouter>{/* <AppRoutes /> */}</BrowserRouter>
		</div>
	);
};
