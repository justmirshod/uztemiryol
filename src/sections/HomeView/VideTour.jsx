import { useState } from "react";
import Container from "../../components/Container";
import YouTubePopUp from "../../components/YoutubePopUp";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

function VideTour() {
  const { lang } = useParams();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const openVideoPopup = () => {
    setIsOpen(true);
  };

  const closeVideoPopup = () => {
    setIsOpen(false);
  };
  return (
    <div className="bg-gray-500/80">
      <Container>
        <div className="flex flex-col md:flex-row h-[300px] md:h-[400px] w-full md:w-1/2 m-auto items-center justify-between text-lg md:text-xl lg:text-[30px] px-4 md:px-0">
          <p className="text-white text-center md:text-left mb-4 md:mb-0">
            {lang === "en" || lang === "ru" ? t("tour") : t("thorugh_company")}
          </p>
          <div className="flex-shrink-0">
            <i
              onClick={openVideoPopup}
              className="fa-solid fa-circle-play text-4xl md:text-6xl lg:text-[80px] text-[#022282] cursor-pointer hover:scale-110 transition-transform duration-200"
            ></i>
            <>
              {isOpen ? (
                <YouTubePopUp
                  videoId="OHy6FfAuFR0"
                  isOpen={isOpen}
                  onClose={closeVideoPopup}
                />
              ) : (
                ""
              )}
            </>
          </div>
          <p className="text-white text-center md:text-right mt-4 md:mt-0">
            {lang === "en" || lang === "ru" ? t("thorugh_company") : t("tour")}
          </p>
        </div>
      </Container>
    </div>
  );
}

export default VideTour;
