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
import SocietyCharter from "../pages/SocietyCharter";
import BussinesPlan from "../pages/BussinesPlan";
import Gallery from "../pages/Gallery";
import SingleBlog from "../pages/SingleBlog";
import SupervisoryBoard from "../pages/SupervisoryBoard";
import Reports from "../pages/Reports";
import Inspection from "../pages/Inspection";
import InternalAudit from "../pages/InternalAudit";
import InternalDocs from "../pages/InternalDocs";
import ExternalAudit from "../pages/ExternalAudit";
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/uz" />} />
      <Route path={`:lang/`} element={<GeneralLayout />}>
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
        <Route path="photos" element={<Gallery />} />
        <Route element={<MediaSubLayout />}>
          <Route path="blog/:category" element={<News />} />
          <Route path="blog-detail/:category/:id" element={<SingleBlog />} />
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
        <Route path="society_charter" element={<SocietyCharter />} />
        <Route path="bussines_plan" element={<BussinesPlan />} />
        <Route path="supervisory_board" element={<SupervisoryBoard />} />
        <Route path="reports" element={<Reports />} />
        <Route path="inspection" element={<Inspection />} />
        <Route path="internal_audit" element={<InternalAudit />} />
        <Route path="internal_documents" element={<InternalDocs />} />
        <Route path="external_audit_conclusion" element={<ExternalAudit />} />
      </Route>
    </Routes>
  );
}
