import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
    <div className="bg-white py-8">
      <Container>
        <div className="py-4">
          <div className={`${flex.alignCenter} justify-between mb-6`}>
            <h1 className="text-[36px] font-semibold ">So'nggi yangiliklar</h1>
          </div>
          <div className="grid grid-cols-3 gap-10">
            {news?.map((item, index) => (
              <div
                key={index}
                className="shadow-md hover:shadow-xl duration-200 rounded-lg overflow-hidden"
              >
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
            ))}
          </div>
          <div className={`${flex.alignCenter} justify-end mt-10`}>
            <button className="border px-6 py-2 rounded-md hover:bg-blue-600 duration-100 text-blue-700 hover:text-white border-blue-700">
              Barcha yangiliklar
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
