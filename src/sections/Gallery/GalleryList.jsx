import React, { useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import { formatImgLink } from "../../utils/format-image-link";

function GalleryList() {
  const { gallery, galleryLoading } = useSelector((state) => state.blogs);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  console.log(gallery);

  const renderGalleryPhotos = (images) => {
    const activeImages = images.filter((_, idx) => idx === 0);
    return activeImages?.map((item) => (
      <img
        src={formatImgLink(item?.image)}
        className="w-full h-[300px] object-cover rounded-lg cursor-pointer"
        alt=""
        onClick={() => {
          const index = gallery?.results?.findIndex((img) =>
            img?.images?.some((imgItem) => imgItem?.image === item?.image)
          );
          setSelectedImageIndex(index);
        }}
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

  const handlePrev = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    } else {
      setSelectedImageIndex(gallery?.results?.length - 1);
    }
  };

  const handleNext = () => {
    if (selectedImageIndex < gallery?.results?.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    } else {
      setSelectedImageIndex(0);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      handlePrev();
    } else if (e.key === "ArrowRight") {
      handleNext();
    } else if (e.key === "Escape") {
      setSelectedImageIndex(null);
    }
  };

  const selectedImage =
    selectedImageIndex !== null ? gallery?.results?.[selectedImageIndex] : null;

  return (
    <>
      <div className="gallery-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full">
        {renderGalleryItems()}
      </div>

      {/* Full Width Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
          onClick={() => setSelectedImageIndex(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-3xl z-10 hover:text-gray-300 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
              onClick={() => setSelectedImageIndex(null)}
            >
              <i className="fas fa-times"></i>
            </button>

            {/* Prev Button */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10 hover:text-gray-300 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            {/* Next Button */}
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10 hover:text-gray-300 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
            >
              <i className="fas fa-chevron-right"></i>
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 text-white bg-black/50 rounded-full px-4 py-2 text-sm">
              {selectedImageIndex + 1} / {gallery?.results?.length}
            </div>

            {/* Main Image */}
            <img
              src={formatImgLink(selectedImage?.images?.[0]?.image)}
              className="max-w-full max-h-full object-contain"
              alt="Full size gallery image"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default GalleryList;
