import { Route, Routes } from "react-router-dom";
import GeneralLayout from "../layout/GeneralLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Managers from "../pages/Managers";

export default function Router() {
  const activeLang = localStorage.getItem("lang") || "uz";

  return (
    <Routes>
      <Route path={`:${activeLang}/`} element={<GeneralLayout />}>
        <Route index element={<Home />} />
        <Route path="about_us" element={<About />} />
        <Route path="managers" element={<Managers />} />
      </Route>
    </Routes>
  );
}
