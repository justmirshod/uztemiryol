import React from "react";
import NewsListItem from "./NewsListItem";

function NewsList() {
  const news = [
    {
      title:
        "“Ma'naviyat - inson ko'zgusi” mavzusida davra suhbati bo'lib o'tdi",
      image:
        "https://railway.uz/upload/resize_cache/iblock/ded/1021_680_2/9iio913oqtpg3uif8on0q2sw2yjch769.jpg",
      date: "4 Fevral, 2024",
    },
    {
      title: `"Xayraton – Mozori Sharif" temir yo‘l liniyasini qayta tiklash va ta’mirlash ishlariga bag‘ishlangan tantanali ochilish marosimi bo‘lib o‘tdi`,
      image:
        "https://railway.uz/upload/resize_cache/iblock/21b/1021_680_2/8nncgf2j4bn9fk7e8jvyo1qcd4keocam.jpg",
      date: "4 Fevral, 2024",
    },
    {
      title:
        "Yuqori tezlikda harakatlanuvchi “Afrosiyob” elektropoyezdlarida yo‘lovchilar o‘rtasida so‘rov o‘tkazilmoqda",
      image:
        "https://railway.uz/upload/resize_cache/iblock/a16/1021_680_2/8psa9q4j4v4o46r6o3wci92m3wpa2acv.jpg",
      date: "4 Fevral, 2024",
    },
    {
      title:
        "“Ma'naviyat - inson ko'zgusi” mavzusida davra suhbati bo'lib o'tdi",
      image:
        "https://railway.uz/upload/resize_cache/iblock/ded/1021_680_2/9iio913oqtpg3uif8on0q2sw2yjch769.jpg",
      date: "4 Fevral, 2024",
    },
    {
      title: `"Xayraton – Mozori Sharif" temir yo‘l liniyasini qayta tiklash va ta’mirlash ishlariga bag‘ishlangan tantanali ochilish marosimi bo‘lib o‘tdi`,
      image:
        "https://railway.uz/upload/resize_cache/iblock/21b/1021_680_2/8nncgf2j4bn9fk7e8jvyo1qcd4keocam.jpg",
      date: "4 Fevral, 2024",
    },
    {
      title:
        "Yuqori tezlikda harakatlanuvchi “Afrosiyob” elektropoyezdlarida yo‘lovchilar o‘rtasida so‘rov o‘tkazilmoqda",
      image:
        "https://railway.uz/upload/resize_cache/iblock/a16/1021_680_2/8psa9q4j4v4o46r6o3wci92m3wpa2acv.jpg",
      date: "4 Fevral, 2024",
    },
  ];

  const renderNews = () => {
    return news.map((item, index) => {
      return <NewsListItem {...item} key={index} />;
    });
  };

  return <div className="grid grid-cols-2 gap-8">{renderNews()}</div>;
}

export default NewsList;
