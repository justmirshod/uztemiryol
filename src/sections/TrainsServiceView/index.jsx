import { useMemo, useState } from "react";
import Container from "../../components/Container";

const services = [
  {
    type: "paid",
    service: [
      "Temir yo'l vokzallari va yo'lovchi poyezdlarida reklama xizmati",
      "Bagaj va yuk bagajini qadoqlash, saqlash xizmati",
      `"VIP" zal xizmati`,
      "Komfort zal xizmati",
      "Dam olish xonasi xizmati",
      "Planshetda elektron kutubxona taqdim etish",
      "Yuk tashuvchi xizmati",
      "Vokzalning nazoratsiz hududida hojatxona xizmati",
      "Sartaroshxona xizmati",
      "Uqalash kreslosini taqdim etish xizmati",
      "Chakana savdoni tashkil etish uchun temir yo'l vokzallari hududidagi binolarni ijaraga berish",
      "Vokzallarda gazeta va jurnallar sotish xizmati",
      "Kutish zalida WiFi Internet xizmati (2-soatdan kop vaqt uchun)",
      "Saqlash kamerasi xizmati",
      "Chiptalarni uyga yetkazib berish xizmati",
    ],
  },
  {
    type: "free",
    service: [
      "Aravacha taqdim qilish xizmati",
      "Hojatxona xizmati",
      "Ona va bola xonasi",
      "Kutish zalida WiFi Internet xizmati",
      "Tibbiy punkt",
      "Nogironlar uchun aravacha",
      "Telefon va noutbuklarni quvvatlash xizmati",
      "Kutubxona",
      "Yo'l davomida choy, suv, qaxva, shakar taqdim qilish xizmati",
    ],
  },
];

export default function TrainsServiceView() {
  const [activeType, setActiveType] = useState("free");

  const activeTypeServices = useMemo(() => {
    return services?.find((item) => item?.type === activeType)?.service;
  }, [activeType]);

  return (
    <Container className="py-20">
      <h1 className="text-2xl font-medium">
        “O‘ZTEMIRYO‘LYO‘LOVCHI” AJ NING YO‘LOVCHILAR FOYDALANISHI MUMKIN BO‘LGAN
        PULLIK VA BEPUL QO‘SHIMCHA SERVIS XIZMATLARI
      </h1>
      <div className="filters mt-20">
        <button
          onClick={() => setActiveType("free")}
          className={`border rounded-md px-6 py-1 mr-1 hover:text-white hover:bg-blue-700 duration-150 ${
            activeType === "free" && "bg-blue-700 text-white"
          }`}
        >
          Bepul xizmatlar
        </button>
        <button
          onClick={() => setActiveType("paid")}
          className={`border rounded-md px-6 py-1 mr-3 hover:text-white hover:bg-blue-700 duration-150 ${
            activeType === "paid" && "bg-blue-700 text-white"
          }`}
        >
          Pullik xizmatlar
        </button>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-10">
        {activeTypeServices?.map((item, index) => (
          <div
            className="w-full py-6 px-6 rounded-md text-lg shadow-cardShadow"
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </Container>
  );
}
