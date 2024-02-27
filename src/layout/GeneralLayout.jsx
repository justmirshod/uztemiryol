import { Navigate, Outlet, useLocation, useParams } from "react-router-dom";
import Header from "../components/Header";
import bg_img from "../assets/images/new3.jpg";
import vid1 from "../assets/videos/vid3.mp4";
import { flex } from "../classes";
import Container from "../components/Container";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function GeneralLayout() {
  const { lang } = useParams();
  const { pathname } = useLocation();
  const languages = ["en", "uz", "ru"];

  const hideIntro = pathname.split("/")[2];

  if (!languages.includes(lang)) return <h1>Nothing found</h1>;
  return (
    <>
      <div className="relative">
        <Header />
        {!hideIntro ? (
          <div className="w-full relative">
            {/* <video src={vid1} width="100%" autoPlay muted loop /> */}
            <img src={bg_img} alt="" />
            <div
              className={`absolute w-full bg-[#052a9980]  z-10 h-full top-0 ${flex.alignCenter} text-white`}
            >
              <Container>
                <h1 className="text-[60px]">O'ztemiryo'lyo'lovchi</h1>
              </Container>
            </div>
          </div>
        ) : null}
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
