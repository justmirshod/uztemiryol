import React, { useState } from "react";

function GalleryList() {
  const [selectedId, setSelectedId] = useState(null);

  const photos = [
    {
      img: "",
      title:
        "https://railway.uz/upload/iblock/64e/64ed1f6faf679aa900f2b17de11a6634.JPG",
    },
    {
      img: "",
      title:
        "https://railway.uz/upload/iblock/312/312bba83e6a9c7a1eba101ac79ac54f0.jpg",
    },
    {
      img: "",
      title:
        "https://railway.uz/upload/iblock/6fd/6fd664e5102b2702ab92dfc5a9361f48.jpg",
    },
    {
      img: "",
      title:
        "https://railway.uz/upload/iblock/b1b/b1bc09b8d689d1e3048ab5eaaba9615b.JPG",
    },
    {
      img: "",
      title:
        "https://railway.uz/upload/iblock/f0d/f0d6a0f46b12026bfb6429b83cc2a804.JPG",
    },
    {
      img: "",
      title:
        "https://railway.uz/upload/iblock/f53/f5316a6224adde3a9454ab5745baf64e.jpg",
    },
    {
      img: "",
      title:
        "https://railway.uz/upload/iblock/64e/64ed1f6faf679aa900f2b17de11a6634.JPG",
    },
    {
      img: "",
      title:
        "https://railway.uz/upload/iblock/312/312bba83e6a9c7a1eba101ac79ac54f0.jpg",
    },
    {
      img: "",
      title:
        "https://railway.uz/upload/iblock/6fd/6fd664e5102b2702ab92dfc5a9361f48.jpg",
    },
    {
      img: "",
      title:
        "https://railway.uz/upload/iblock/b1b/b1bc09b8d689d1e3048ab5eaaba9615b.JPG",
    },
    {
      img: "",
      title:
        "https://railway.uz/upload/iblock/f0d/f0d6a0f46b12026bfb6429b83cc2a804.JPG",
    },
    {
      img: "",
      title:
        "https://railway.uz/upload/iblock/f53/f5316a6224adde3a9454ab5745baf64e.jpg",
    },
  ];
  const renderGalleryItems = () => {
    return photos.map((item, index) => {
      return (
        <div
          key={index}
          className="gallery-item col-span-4 cursor-pointer overflow-hidden"
        >
          <div className="img-box hover:scale-105 transition-all duration-300 ease-in">
            <img
              src={item.title}
              className="w-full h-[500px] object-cover"
              alt=""
            />
          </div>
        </div>
      );
    });
  };
  return (
    <>
      <div className="gallery-list grid grid-cols-12 gap-6">
        {renderGalleryItems()}
      </div>
    </>
  );
}

export default GalleryList;
