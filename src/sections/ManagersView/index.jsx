import { flex } from "../../classes";
import Container from "../../components/Container";

import phone_icon from "../../assets/icons/phone-svgrepo-com.svg";

const managers = [
  {
    name: "Falonchayev Faloncha",
    img: "https://www.gazeta.uz/media/img/2023/07/nclzC916893165311148_b.jpg",
    phone: "+998 (99) 211-35-26",
    about:
      "Zufar Narzullayev “O‘zbekiston temir yo‘llari” AJ raisi vazifasini bajaruvchi etib tayinlandi. Prezident sobiq rahbar Husnutdin Xosilovni faoliyatida sustkashlikka yo‘l qo‘ygani uchun ishdan olgandi.",
    role: "O'zbekiston temir yo'llari AJ raisi",
  },
  {
    name: "Falonchayev Faloncha",
    img: "https://www.gazeta.uz/media/img/2023/07/nclzC916893165311148_b.jpg",
    phone: "+998 (99) 211-35-26",
    about:
      "Zufar Narzullayev “O‘zbekiston temir yo‘llari” AJ raisi vazifasini bajaruvchi etib tayinlandi. Prezident sobiq rahbar Husnutdin Xosilovni faoliyatida sustkashlikka yo‘l qo‘ygani uchun ishdan olgandi.",
    role: "O'zbekiston temir yo'llari AJ raisi",
  },
  {
    name: "Falonchayev Faloncha",
    img: "https://www.gazeta.uz/media/img/2023/07/nclzC916893165311148_b.jpg",
    phone: "+998 (99) 211-35-26",
    about:
      "Zufar Narzullayev “O‘zbekiston temir yo‘llari” AJ raisi vazifasini bajaruvchi etib tayinlandi. Prezident sobiq rahbar Husnutdin Xosilovni faoliyatida sustkashlikka yo‘l qo‘ygani uchun ishdan olgandi.",
    role: "O'zbekiston temir yo'llari AJ raisi",
  },
  {
    name: "Falonchayev Faloncha",
    img: "https://www.gazeta.uz/media/img/2023/07/nclzC916893165311148_b.jpg",
    phone: "+998 (99) 211-35-26",
    about:
      "Zufar Narzullayev “O‘zbekiston temir yo‘llari” AJ raisi vazifasini bajaruvchi etib tayinlandi. Prezident sobiq rahbar Husnutdin Xosilovni faoliyatida sustkashlikka yo‘l qo‘ygani uchun ishdan olgandi.",
    role: "O'zbekiston temir yo'llari AJ raisi",
  },
  {
    name: "Falonchayev Faloncha",
    img: "https://www.gazeta.uz/media/img/2023/07/nclzC916893165311148_b.jpg",
    phone: "+998 (99) 211-35-26",
    about:
      "Zufar Narzullayev “O‘zbekiston temir yo‘llari” AJ raisi vazifasini bajaruvchi etib tayinlandi. Prezident sobiq rahbar Husnutdin Xosilovni faoliyatida sustkashlikka yo‘l qo‘ygani uchun ishdan olgandi.",
    role: "O'zbekiston temir yo'llari AJ raisi",
  },
];

export default function ManagersView() {
  return (
    <>
      <Container className="py-20">
        <div className="grid grid-cols-2 gap-20">
          {managers?.map((manager, index) => (
            <div className="col-span-1 border" key={index}>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-1">
                  <img src={manager?.img} className="w-full" alt="" />
                </div>
                <div className="col-span-1">
                  <div className="h-full flex flex-col justify-between py-4">
                    <div>
                      <h1 className="text-xl font-medium mb-1">
                        {manager?.name}
                      </h1>
                      <p className="mb-3">{manager?.role}</p>
                      <div className={`${flex.alignCenter}`}>
                        <img
                          width="25px"
                          height="25px"
                          src={phone_icon}
                          alt=""
                        />
                        <p className="ml-2">{manager.phone}</p>
                      </div>
                    </div>
                    <div>
                      <button className="border py-[7px] px-8 rounded-[4px] text-blue-700 hover:text-white hover:bg-blue-700 border-blue-700 duration-100">
                        Batafsil
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
