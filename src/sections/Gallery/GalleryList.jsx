import React from "react";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import { formatImgLink } from "../../utils/format-image-link";

function GalleryList() {
  const { gallery, galleryLoading } = useSelector((state) => state.blogs);

  console.log(gallery);

  const renderGalleryPhotos = (images) => {
    const activeImages = images.filter((_, idx) => idx === 0);
    return activeImages?.map((item) => (
      <img
        src={formatImgLink(item?.image)}
        className="w-full h-[300px] object-cover"
        alt=""
      />
    ));
  };

  const renderGalleryItems = () => {
    if (galleryLoading) return <Loader />;
    if (!gallery?.results?.length)
      return <h1 className="text-center">Hech narsa topilmadi</h1>;
    return gallery?.results?.map((item, index) => {
      return (
        <div
          key={index}
          className="gallery-item cursor-pointer overflow-hidden"
        >
          <div className="img-box hover:scale-105 transition-all duration-300 ease-in">
            {renderGalleryPhotos(item?.images)}
          </div>
        </div>
      );
    });
  };
  return (
    <>
      <div className="gallery-list grid grid-cols-4 gap-6">
        {renderGalleryItems()}
      </div>
    </>
  );
}

export default GalleryList;
