import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import bg_img from "../assets/images/bg09.png";
import { flex } from "../classes";
import Container from "../components/Container";
import Footer from "../components/Footer";
import "./style.css";
import { useEffect } from "react";
import path from "path";

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

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <>
      <div className="relative">
        <Header />
        <div className="w-full relative">
          {/* <video src={vid1} width="100%" autoPlay muted loop /> */}
          <img
            src={bg_img}
            alt=""
            width="100%"
            className={
              pathname === "/uz/" || pathname === "/ru/" || pathname === "/en/"
                ? "shrinked-height"
                : ""
            }
          />
          <div
            className={`absolute w-full bg-[#052a9980]  z-10 h-full top-0 ${flex.alignCenter} text-white`}
          >
            <Container>
              <h1 className="text-[60px]">Temiryo'lekspress</h1>
            </Container>
          </div>
        </div>
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
