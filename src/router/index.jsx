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
import SupervisoryBoard from "../pages/SupervisoryBoard";
import Reports from "../pages/Reports";
import Inspection from "../pages/Inspection";
import InternalAudit from "../pages/InternalAudit";
import InternalDocs from "../pages/InternalDocs";
import ExternalAudit from "../pages/ExternalAudit";
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<GeneralLayout />}>
        <Route path="/:lang" element={<Home />} />
        <Route path="/:lang/about_us" element={<About />} />
        <Route path="/:lang/managers" element={<Managers />} />
        <Route
          path="/:lang/development_strategy"
          element={<DevelopmentStrategy />}
        />
        <Route path="/:lang/history" element={<History />} />
        <Route path="/:lang/statistics" element={<Statistics />} />
        <Route path="/:lang/vacancies" element={<Vacancies />} />
        <Route path="/:lang/communications" element={<Contacts />} />
        <Route path="/:lang/citizen_appeal" element={<CitizenAppeal />} />
        <Route path="/:lang/online_reception" element={<OnlineReception />} />
        <Route element={<MediaSubLayout />}>
          <Route path="/:lang/news" element={<News />} />
        </Route>
        <Route path="/:lang/schedule" element={<Schedules />} />
        <Route path="/:lang/trains" element={<TrainsService />} />
        <Route path="/:lang/ad_services" element={<AdService />} />
        <Route
          path="/:lang/ticket_buy_instruction"
          element={<TicketBuyInstruction />}
        />
        <Route
          path="/:lang/ticket_return_instruction"
          element={<RefundBoughtTicket />}
        />
        <Route
          path="/:lang/railway_transportation_law"
          element={<RailwayTransportLaw />}
        />
        <Route path="/:lang/commands" element={<Commands />} />
        <Route path="/:lang/decisions" element={<Decisions />} />
        <Route path="/:lang/laws_of_republic" element={<LawsOfRepublic />} />
        <Route path="/:lang/society_charter" element={<SocietyCharter />} />
        <Route path="/:lang/bussines_plan" element={<BussinesPlan />} />
        <Route path="/:lang/supervisory_board" element={<SupervisoryBoard />} />
        <Route path="/:lang/reports" element={<Reports />} />
        <Route path="/:lang/inspection" element={<Inspection />} />
        <Route path="/:lang/internal_audit" element={<InternalAudit />} />
        <Route path="/:lang/internal_documents" element={<InternalDocs />} />
        <Route
          path="/:lang/external_audit_conclusion"
          element={<ExternalAudit />}
        />
      </Route>
    </Routes>
  );
}
