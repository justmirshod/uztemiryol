import { useState } from "react";
import Container from "../../components/Container";
import YouTubePopUp from "../../components/YoutubePopUp";

function VideTour() {
  const [isOpen, setIsOpen] = useState(false);

  const openVideoPopup = () => {
    setIsOpen(true);
  };

  const closeVideoPopup = () => {
    setIsOpen(false);
  };
  return (
    <Container>
      <div className="flex h-[400px] w-1/2 m-auto items-center justify-between text-[30px]">
        <p>Tashkilot bo'ylab</p>
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
        <p>Sayohat</p>
      </div>
    </Container>
  );
}

export default VideTour;
