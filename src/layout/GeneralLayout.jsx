import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import bg_img from "../assets/images/bg09.png";
import { flex } from "../classes";
import Container from "../components/Container";
import Footer from "../components/Footer";
import "./style.css";

export default function GeneralLayout() {
  const { pathname } = useLocation();

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
              <h1 className="text-[60px]">O'ztemiryo'lyo'lovchi</h1>
            </Container>
          </div>
        </div>
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
