import { Navigate, Route, Routes } from "react-router-dom";
import GeneralLayout from "../layout/GeneralLayout";
import Home from "../pages/Home";
import News from "../pages/News";
import MediaSubLayout from "../layout/MediaSubLayout";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<GeneralLayout />}>
        <Route index element={<Navigate to="/uz" />} />
        <Route path="/:lang" element={<Home />} />
        <Route element={<MediaSubLayout />}>
          <Route path="/:lang/news" element={<News />} />
        </Route>
        <Route path="*" element={<h1>Not found</h1>} />
      </Route>
    </Routes>
  );
}
