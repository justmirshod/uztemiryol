import { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { flex } from "../../classes";
import Container from "../../components/Container";

import next_icon from "../../assets/icons/next.png";
import prev_icon from "../../assets/icons/previous.png";

import "swiper/css";
import "swiper/css/navigation";
import "./index.css";

const news = [
  {
    img: "http://uzrailpass.uz/upload/iblock/fab/fabda1d5376afaac17189b8a377c9bfc.jpg",
    title:
      "Проезд на высокоскоростных и скорых поездах в Узбекистане подорожает на 20%",
    date: "29.08.2024",
  },
  {
    img: "http://uzrailpass.uz/upload/iblock/706/7061b43c852818b17fea750aca063cbd.jpg",
    title:
      "“O‘ztemiryo‘lyo‘lovchi” AJ ning shahar atrofida harakatlanuvchi yo‘lovchi poyezdlar chipta narxlari",
    date: "29.08.2024",
  },
  {
    img: "http://uzrailpass.uz/upload/iblock/fab/fabda1d5376afaac17189b8a377c9bfc.jpg",
    title:
      "Проезд на высокоскоростных и скорых поездах в Узбекистане подорожает на 20%",
    date: "29.08.2024",
  },
  {
    img: "http://uzrailpass.uz/upload/iblock/706/7061b43c852818b17fea750aca063cbd.jpg",
    title:
      "“O‘ztemiryo‘lyo‘lovchi” AJ ning shahar atrofida harakatlanuvchi yo‘lovchi poyezdlar chipta narxlari",
    date: "29.08.2024",
  },
];

export default function NewsPart() {
  const swiperRef = useRef();
  return (
    <>
      <Container>
        <div className="my-24">
          <div className={`${flex.alignCenter} justify-between mb-6`}>
            <h1 className="text-[36px] font-semibold ">So'nggi yangiliklar</h1>
            <div className={`${flex.alignCenter}`}>
              <div>
                <img
                  src={prev_icon}
                  className="w-10 h-10 inline-block mr-4"
                  alt=""
                  onClick={() => swiperRef.current.slidePrev()}
                />
                <img
                  src={next_icon}
                  className="w-10 h-10 inline-block"
                  alt=""
                  onClick={() => swiperRef.current.slideNext()}
                />
              </div>
              <button className="border px-6 py-2 rounded-md hover:bg-blue-600 duration-100 text-blue-700 hover:text-white border-blue-700 mx-4">
                Barcha yangiliklar
              </button>
            </div>
          </div>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              480: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1600: {
                slidesPerView: 4,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop={true}
          >
            {news?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="shadow-md mb-10 mx-2 hover:shadow-xl duration-200 rounded-lg overflow-hidden">
                  <img src={item?.img} className="w-full h-[280px]" alt="" />
                  <div className="py-3 flex flex-col justify-between px-4">
                    <p className="my-2">{item?.date}</p>
                    <p className="text-lg font-medium hover:text-blue-800 cursor-pointer">
                      {item?.title}
                    </p>
                    <div className={`${flex.alignCenter} justify-end my-4`}>
                      <button className="text-blue-700">Batafsil</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </>
  );
}
