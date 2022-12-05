import MainPage from "../pages/MainPage";
import Donut from "../pages/Donut";
import Onboarding from "../pages/Onboarding";

export const publicRoutes = [
  {
    path: "/",
    component: <MainPage />,
  },
  {
    path: "/donut",
    component: <Donut />,
  },
  {
    path: "/onboarding",
    component: <Onboarding />,
  },
];
