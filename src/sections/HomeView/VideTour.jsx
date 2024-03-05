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
        <div className="flex h-[400px] w-1/2 m-auto items-center justify-between text-[30px]">
          <p className="text-white">
            {lang === "en" || lang === "ru" ? t("tour") : t("thorugh_company")}
          </p>
          <div>
            <i
              onClick={openVideoPopup}
              className="fa-solid fa-circle-play text-[80px] text-[#022282] cursor-pointer"
            ></i>
            <>
              {isOpen ? (
                <YouTubePopUp
                  videoId="7o3K-f6vR2A"
                  isOpen={isOpen}
                  onClose={closeVideoPopup}
                />
              ) : (
                ""
              )}
            </>
          </div>
          <p className="text-white">
            {lang === "en" || lang === "ru" ? t("thorugh_company") : t("tour")}
          </p>
        </div>
      </Container>
    </div>
  );
}

export default VideTour;
