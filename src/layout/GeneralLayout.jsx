import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import bg_img from "../assets/images/bg09.png";
import Footer from "../components/Footer";
import "./style.css";
import { useEffect } from "react";
import Intro from "../components/Intro";

export default function GeneralLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { lang } = useParams();
  const activeLang = localStorage.getItem("lang") || "uz";

  useEffect(() => {
    if (lang === "uz" || lang === "ru" || lang === "en") return;
    else navigate(`/${activeLang}${pathname}`, { replace: true });
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <>
      <div className="relative">
        <Header />
        <Intro bg={bg_img} />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
