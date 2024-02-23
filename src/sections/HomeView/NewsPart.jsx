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
          <div className="flex justify-end">
            <button className="border px-6 py-2 rounded-md bg-blue-700 hover:bg-blue-600 duration-100 text-white ml-auto">
              Barchasi
            </button>
          </div>
        </div>
      </Container>
      <div
        className="p-12 mb-12 h-[100vh] "
        style={{
          background: "url('/src/assets/images/afrosiyob123.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <Container>
          <p>
            О ЛИЦЕЕ Академический лицей международного Вестминстерского
            университета в Ташкенте (ALWIUT) был основан 9 декабря 2008 года и
            является общеобразовательной двухгодичной государственной
            среднеобразовательной школой. В отличие от образовательных систем
            других стран*, предлагающих 12-летнее школьное образование. Система
            образования Узбекистана включает 11-летнюю школу. Вместо потоков в
            лицее действует уровневая система: учащиеся 1-го уровня (курса)
            приравниваются к 10-классникам в обычных школах, учащиеся 2-го
            уровня (курса) - к 11-классникам. Каждый курс разделен на 7 русских
            групп и 2 узбекских группы, в общей сложности 487 студентов 1 и 2
            курса. В отличие от других государственных шко
          </p>
        </Container>
        <div className="bg-white  p-4 mt-12">
          <Container>
            <p>
              О ЛИЦЕЕ Академический лицей международного Вестминстерского
              университета в Ташкенте (ALWIUT) был основан 9 декабря 2008 года и
              является общеобразовательной двухгодичной государственной
              среднеобразовательной школой. В отличие от образовательных систем
              других стран*, предлагающих 12-летнее школьное образование.
              Система образования Узбекистана включает 11-летнюю школу. Вместо
              потоков в лицее действует уровневая система: учащиеся 1-го уровня
              (курса) приравниваются к 10-классникам в обычных школах, учащиеся
              2-го уровня (курса) - к 11-классникам. Каждый курс разделен на 7
            </p>
          </Container>
        </div>
        <Container className="mt-4 p-4">
          <p>
            О ЛИЦЕЕ Академический лицей международного Вестминстерского
            университета в Ташкенте (ALWIUT) был основан 9 декабря 2008 года и
            является общеобразовательной двухгодичной государственной
            среднеобразовательной школой. В отличие от образовательных систем
            других стран*, предлагающих 12-летнее школьное образование. Система
            образования Узбекистана включает 11-летнюю школу. Вместо потоков в
            лицее действует уровневая система: учащиеся 1-го уровня (курса)
            приравниваются к 10-классникам в обычных школах, учащиеся 2-го
            уровня (курса) - к 11-классникам. Каждый курс разделен на 7 русских
            групп и 2 узбекских группы, в общей сложности 487 студентов 1 и 2
            курса. В отличие от других государственных шко
          </p>
        </Container>
      </div>
    </>
  );
}
