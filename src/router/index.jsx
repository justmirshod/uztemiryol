import { Route, Routes } from "react-router-dom";
import GeneralLayout from "../layout/GeneralLayout";
import Home from "../pages/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<GeneralLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
