import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import bg_img from "../assets/images/bg09.png";
import vid1 from "../assets/videos/vid3.mp4";
import { flex } from "../classes";
import Container from "../components/Container";
import Footer from "../components/Footer";

export default function GeneralLayout() {
  return (
    <>
      <div className="relative">
        <Header />
        <div className="w-full relative">
          {/* <video src={vid1} width="100%" autoPlay muted loop /> */}
          <img src={bg_img} alt="" width="100%" />
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
