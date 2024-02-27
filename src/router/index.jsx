import { Route, Routes } from "react-router-dom";
import GeneralLayout from "../layout/GeneralLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Managers from "../pages/Managers";
import DevelopmentStrategy from "../pages/DevelopmentStrategy";
import History from "../pages/History";
import Statistics from "../pages/Statistics";
import Vacancies from "../pages/Vacancies";
import Contacts from "../pages/Contacts";
import CitizenAppeal from "../pages/CitizenAppeal";
import OnlineReception from "../pages/OnlineReception";

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
      </Route>
    </Routes>
  );
}
