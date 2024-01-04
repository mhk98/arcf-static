import { createBrowserRouter } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Home from "../Pages/Home";
import About from "../Pages/About/About";
import AllProject from "../Pages/AllProject";
import Health from "../Pages/Services/Health";
import Education from "../Pages/Services/Education";
import MicroCredit from "../Pages/Services/MicroCredit";
import QualityLife from "../Pages/Services/QualityLife";
import Environment from "../Pages/Services/Environment";
import Orphanage from "../Pages/Services/Orphanage";
import Oldhome from "../Pages/Services/Oldhome";
import BecomeVolunteer from "../Pages/Services/BecomeVolunteer";
import DonateList from "../Pages/Donations/DonateList";
import DonateDetails from "../Pages/Donations/DonateDetails";
import EducationDetails from "../Pages/Services/EducationDetails";
import MIcroDetails from "../Pages/Services/MIcroDetails";
import QualityLifeDetails from "../Pages/Services/QualityLifeDetails";
import DonateNow from "../Pages/Donations/DonateNow";
import Gallery from "../Pages/Gallery";
import Events from "../Pages/Events/Events";
import EventDetails from "../Pages/Events/EventDetails";
import DonateEvents from "../Components/DonateEvents";
import News from "../Pages/News/News";
import NewsDetails from "../Pages/News/NewsDetails";
import Contact from "../Pages/Contact";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/projects",
        element: <AllProject />,
      },
      {
        path: "/health",
        element: <Health />,
      },
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/microcredit",
        element: <MicroCredit />,
      },
      {
        path: "/quality-life",
        element: <QualityLife />,
      },
      {
        path: "/environment",
        element: <Environment />,
      },
      {
        path: "/orphanage",
        element: <Orphanage />,
      },
      {
        path: "/oldhome",
        element: <Oldhome />,
      },
      {
        path: "/become-volunteer",
        element: <BecomeVolunteer />,
      },
      {
        path: "/donate-list",
        element: <DonateList />,
      },
      {
        path: "/donate-details",
        element: <DonateDetails />,
      },
      {
        path: "/education-details",
        element: <EducationDetails />,
      },
      {
        path: "/micro-details",
        element: <MIcroDetails />,
      },
      {
        path: "//quality-life-details",
        element: <QualityLifeDetails />,
      },
      {
        path: "/donate-now",
        element: <DonateNow />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/event-details",
        element: <EventDetails />,
      },
      {
        path: "/donate-events",
        element: <DonateEvents />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/news-details",
        element: <NewsDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default routes;
