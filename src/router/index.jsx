import { Navigate, Route, Routes } from "react-router-dom";
import GeneralLayout from "../layout/GeneralLayout";
import Home from "../pages/Home";
import News from "../pages/News";
import MediaSubLayout from "../layout/MediaSubLayout";
import About from "../pages/About";
import Managers from "../pages/Managers";
import DevelopmentStrategy from "../pages/DevelopmentStrategy";
import History from "../pages/History";
import Statistics from "../pages/Statistics";
import Vacancies from "../pages/Vacancies";
import Contacts from "../pages/Contacts";
import CitizenAppeal from "../pages/CitizenAppeal";
import OnlineReception from "../pages/OnlineReception";
import Schedules from "../pages/Schedules";
import TrainsService from "../pages/TrainsService";
import TicketBuyInstruction from "../pages/TicketBuyInstruction";
import RefundBoughtTicket from "../pages/RefundBoughtTicket";
import AdService from "../pages/AdService";
import RailwayTransportLaw from "../pages/RailwayTransportLaw";
import Commands from "../pages/Commands";
import Decisions from "../pages/Decisions";
import LawsOfRepublic from "../pages/LawsOfRepublic";
export default function Router() {
  const activeLang = localStorage.getItem("lang") || "uz";

  return (
    <Routes>
      <Route path={`:${activeLang}/`} element={<GeneralLayout />}>
        <Route index element={<Home />} />
        <Route path="about_us" element={<About />} />
        <Route path="managers" element={<Managers />} />
        <Route path="development_strategy" element={<DevelopmentStrategy />} />
        <Route path="history" element={<History />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="vacancies" element={<Vacancies />} />
        <Route path="communications" element={<Contacts />} />
        <Route path="citizen_appeal" element={<CitizenAppeal />} />
        <Route path="online_reception" element={<OnlineReception />} />
        <Route element={<MediaSubLayout />}>
          <Route path="news" element={<News />} />
        </Route>
        <Route path="schedule" element={<Schedules />} />
        <Route path="trains" element={<TrainsService />} />
        <Route path="ad_services" element={<AdService />} />
        <Route
          path="ticket_buy_instruction"
          element={<TicketBuyInstruction />}
        />
        <Route
          path="ticket_return_instruction"
          element={<RefundBoughtTicket />}
        />
        <Route
          path="railway_transportation_law"
          element={<RailwayTransportLaw />}
        />
        <Route path="commands" element={<Commands />} />
        <Route path="decisions" element={<Decisions />} />
        <Route path="laws_of_republic" element={<LawsOfRepublic />} />
      </Route>
    </Routes>
  );
}
