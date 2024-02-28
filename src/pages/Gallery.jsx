import React from "react";
import { Helmet } from "react-helmet-async";
import GalleryView from "../sections/Gallery/view/GalleryView";

function Gallery() {
  return (
    <>
      <Helmet>
        <title>Galleriya</title>
      </Helmet>
      <GalleryView />
    </>
  );
}

export default Gallery;
