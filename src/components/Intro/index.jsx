import React from "react";
import { useLocation } from "react-router-dom";
import { flex } from "../../classes";
import Container from "../Container";
import bg1 from "../../assets/images/samarqand.jpg";
import bg2 from "../../assets/images/image_2024-02-27_12-25-53.png";
import bg3 from "../../assets/images/railway5.png";
import bg4 from "../../assets/images/image_2024-02-27_12-26-49.png";
import bg5 from "../../assets/images/bg.jpg";
import bg6 from "../../assets/images/railway2.jpg";
import bg7 from "../../assets/images/railway4.png";
import bg8 from "../../assets/images/railway6.jpg";
import bg9 from "../../assets/images/railway9.jpg";
import bg10 from "../../assets/images/railway8.jpg";

function Intro({ bg, text }) {
  const { pathname } = useLocation();
  const isNotHome = pathname.split("/")[2];
  const activePage = pathname.split("/").reverse()[0];

  const pages = [
    {
      name: "news",
      img: bg1,
    },
    {
      name: "tenders",
      img: bg2,
    },
    {
      name: "announcements",
      img: bg4,
    },
    {
      name: "about_us",
      img: bg5,
    },
    {
      name: "managers",
      img: bg2,
    },
    {
      name: "vacancies",
      img: bg1,
    },
    {
      name: "history",
      img: bg6,
    },
    {
      name: "citizen_appeal",
      img: bg7,
    },
    {
      name: "communications",
      img: bg3,
    },
    {
      name: "online_reception",
      img: bg8,
    },
    {
      name: "statistics",
      img: bg10,
    },
  ];

  return (
    <div className={`w-full ${isNotHome ? "h-[360px]" : ""}  relative`}>
      <div className="w-full h-full">
        {/* <video src={vid1} width="100%" autoPlay muted loop /> */}
        <img
          src={pages?.find((item) => item?.name === activePage)?.img || bg}
          alt=""
          width="100%"
          className="w-full h-full object-cover object-center"
        />
        <div
          className={`absolute w-full bg-[#052a9980]  z-10 h-full top-0 ${flex.alignCenter} text-white`}
        >
          <Container>
            <h1 className="text-[60px]">{text || "Temiryo'lekspress"}</h1>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Intro;
