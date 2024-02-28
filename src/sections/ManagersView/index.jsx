import { flex } from "../../classes";
import Container from "../../components/Container";

import phone_icon from "../../assets/icons/phone-svgrepo-com.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getManagersList } from "../../api/managers";

import "./style.css";
import ManagersItem from "./ManagersItem";

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
        <div>
          {managers?.map((manager, index) => (
            <ManagersItem manager={manager} key={index} />
          ))}
        </div>
      </Container>
    </>
  );
}
