import { lazy } from "react";

const Main = lazy(() => import("../layout/Main"));

const LandingPageUnlog = lazy(() => import("../pages/LandingPageUnlog"));
const LandingPage = lazy(() => import("../pages/LandingPage"));
const Chat = lazy(() => import("../pages/Chat"));
const Offer = lazy(() => import("../pages/Offer"));
const Planner = lazy(() => import("../pages/Planner"));

const routes = [
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "", element: <LandingPageUnlog /> },
      { path: "/landing", element: <LandingPage /> },
      { path: "/chat", element: <Chat /> },
      { path: "/offer", element: <Offer /> },
      { path: "/planner", element: <Planner /> },
    ],
  },

  //   { path: "*", element: <NotFoundPage /> },
];

export default routes;
