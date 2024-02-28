import { flex } from "../../classes";
import Container from "../../components/Container";

import phone_icon from "../../assets/icons/phone-svgrepo-com.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getManagersList } from "../../api/managers";

// const managers = [
//   {
//     name: "Falonchayev Faloncha",
//     img: "https://www.gazeta.uz/media/img/2023/07/nclzC916893165311148_b.jpg",
//     phone: "+998 (99) 211-35-26",
//     about:
//       "Zufar Narzullayev “O‘zbekiston temir yo‘llari” AJ raisi vazifasini bajaruvchi etib tayinlandi. Prezident sobiq rahbar Husnutdin Xosilovni faoliyatida sustkashlikka yo‘l qo‘ygani uchun ishdan olgandi.",
//     role: "O'zbekiston temir yo'llari AJ raisi",
//   },
//   {
//     name: "Falonchayev Faloncha",
//     img: "https://www.gazeta.uz/media/img/2023/07/nclzC916893165311148_b.jpg",
//     phone: "+998 (99) 211-35-26",
//     about:
//       "Zufar Narzullayev “O‘zbekiston temir yo‘llari” AJ raisi vazifasini bajaruvchi etib tayinlandi. Prezident sobiq rahbar Husnutdin Xosilovni faoliyatida sustkashlikka yo‘l qo‘ygani uchun ishdan olgandi.",
//     role: "O'zbekiston temir yo'llari AJ raisi",
//   },
//   {
//     name: "Falonchayev Faloncha",
//     img: "https://www.gazeta.uz/media/img/2023/07/nclzC916893165311148_b.jpg",
//     phone: "+998 (99) 211-35-26",
//     about:
//       "Zufar Narzullayev “O‘zbekiston temir yo‘llari” AJ raisi vazifasini bajaruvchi etib tayinlandi. Prezident sobiq rahbar Husnutdin Xosilovni faoliyatida sustkashlikka yo‘l qo‘ygani uchun ishdan olgandi.",
//     role: "O'zbekiston temir yo'llari AJ raisi",
//   },
//   {
//     name: "Falonchayev Faloncha",
//     img: "https://www.gazeta.uz/media/img/2023/07/nclzC916893165311148_b.jpg",
//     phone: "+998 (99) 211-35-26",
//     about:
//       "Zufar Narzullayev “O‘zbekiston temir yo‘llari” AJ raisi vazifasini bajaruvchi etib tayinlandi. Prezident sobiq rahbar Husnutdin Xosilovni faoliyatida sustkashlikka yo‘l qo‘ygani uchun ishdan olgandi.",
//     role: "O'zbekiston temir yo'llari AJ raisi",
//   },
//   {
//     name: "Falonchayev Faloncha",
//     img: "https://www.gazeta.uz/media/img/2023/07/nclzC916893165311148_b.jpg",
//     phone: "+998 (99) 211-35-26",
//     about:
//       "Zufar Narzullayev “O‘zbekiston temir yo‘llari” AJ raisi vazifasini bajaruvchi etib tayinlandi. Prezident sobiq rahbar Husnutdin Xosilovni faoliyatida sustkashlikka yo‘l qo‘ygani uchun ishdan olgandi.",
//     role: "O'zbekiston temir yo'llari AJ raisi",
//   },
// ];

export default function ManagersView() {
  const dispatch = useDispatch();

  const { managers, loading } = useSelector((state) => state.managers);

  useEffect(() => {
    dispatch(getManagersList());
  }, []);

  return (
    <>
      <Container className="py-20">
        <h1 className="text-[32px] font-medium mb-8">Rahbariyat</h1>
        <div className="grid grid-cols-2 gap-20">
          {managers?.map((manager, index) => (
            <div className="col-span-1 border" key={index}>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-1">
                  <img src={manager?.image} className="" alt="" />
                </div>
                <div className="col-span-1">
                  <div className="h-full flex flex-col justify-between py-4">
                    <div>
                      <h1 className="text-xl font-medium mb-1">
                        {manager?.first_name}
                      </h1>
                      <p className="mb-3">{manager?.job}</p>
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
