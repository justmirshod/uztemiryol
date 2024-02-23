import YouTube from "react-youtube";
import CustomModal from "../CustomModal/CustomModal";

const YouTubePopUp = ({ videoId, isOpen, onClose }) => {
  const opts = {
    playerVars: {
      autoplay: 1,
      controls: 1,
      rel: 0,
      outline: "none",
      showinfo: 0,
    },
  };

  return (
    <CustomModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          "z-index": "100000",
          background: "#000000cc",
        },
        content: {
          background: "transparent",
          padding: "0",
          display: "flex",
          "align-items": "center",
          "justify-content": "center",
          margin: "auto",
          border: "none",
          width: "fit-content",
          height: "fit-content",
        },
      }}
    >
      <div>
        <i className="fa fa-play-circle-o"></i>
      </div>
      <YouTube
        videoId={videoId}
        opts={{ ...opts, width: "1000px", height: "600px" }}
      />
    </CustomModal>
  );
};

export default YouTubePopUp;
