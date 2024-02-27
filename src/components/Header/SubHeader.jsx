import { Link } from "react-router-dom";
import { flex } from "../../classes";
import Container from "../Container";
import Logo from "../Logo";
import SubHeaderItem from "./SubHeaderItem";

const activeLang = localStorage.getItem("lang") || "uz";

const siteRoutes = [
  {
    title: "Biz haqimizda",
    routes: [
      {
        name: `"Temiryo'lyo'lovchi" haqida`,
        link: `/${activeLang}/about_us`,
      },
      {
        name: "Rahbariyat",
        link: `/${activeLang}/managers`,
      },
      {
        name: "Rivojlanish strategiyasi",
        link: `/${activeLang}/development_strategy`,
      },
      {
        name: "Tarix",
        link: `/${activeLang}/history`,
      },
      {
        name: "Statistik ma'lumot",
        link: `/${activeLang}/statistics`,
      },
      {
        name: "Ish o'rinlari",
        link: `/${activeLang}/vacancies`,
      },
      {
        name: "Bog'lanish",
        link: `/${activeLang}/communications`,
      },
      {
        name: "Fuqarolar murojaati",
        link: `/${activeLang}/citizen_appeal`,
      },
      {
        name: "Onlayn qabulxona",
        link: `/${activeLang}/online_reception`,
      },
    ],
  },
  {
    title: "Matbuot markazi",
    routes: [
      {
        name: `Yangiliklar`,
        link: `/${activeLang}/news`,
      },
      {
        name: "Tenderlar",
        link: `/${activeLang}/tenders`,
      },
      {
        name: "Fotogalereya",
        link: `/${activeLang}/photos`,
      },
      {
        name: "Videolar",
        link: `/${activeLang}/videos`,
      },
      {
        name: "E'lonlar",
        link: `/${activeLang}/announcements`,
      },
    ],
  },
  {
    title: "Xarita",
    routes: [],
    link: `/${activeLang}/map`,
  },
  {
    title: "Jadval",
    routes: [
      {
        name: `Yuqori tezlikda harakatlanadigan "Afrosiyob" elektropoyezdining qatnovlar jadvali`,
        link: `/${activeLang}/schedule`,
      },
    ],
  },
  {
    title: "Chipta sotish",
    routes: [],
    link: `https://eticket.railway.uz`,
  },
  {
    title: "Xizmatlar",
    routes: [
      {
        name: "Yo'lovchi poyezdlar",
        link: `/${activeLang}/trains`,
      },
      {
        name: "Reklama xizmatlari",
        link: `/${activeLang}/ad_services`,
      },
      {
        name: "Davlat xizmatlari",
        link: `https://my.gov.uz`,
      },
      {
        name: " Elektron chiptani qanday harid qilish mumkin?",
        link: `https://chipta.railway.uz/${activeLang}/pages/how-tu-buy`,
      },
      {
        name: "Elektron chiptani qanday qaytarish kerak?",
        link: `https://chipta.railway.uz/${activeLang}/pages/how-tu-return`,
      },
    ],
  },
  {
    title: "Qonunlar",
    routes: [
      {
        name: "Temiryo'l transporti haqida qonun",
        link: `/${activeLang}/railway_transportation_law`,
      },
      {
        name: "Farmoishlar",
        link: `/${activeLang}/commands`,
      },
      {
        name: "Qarorlar",
        link: `/${activeLang}/decisions`,
      },
      {
        name: "O'zbekiston Respublikasi Qonunlari",
        link: `/${activeLang}/laws_of_republic`,
      },
    ],
  },
  {
    title: "Korporativ boshqaruv",
    routes: [
      {
        name: "Jamiyat ustavi",
        link: `/${activeLang}/society_charter`,
      },
      {
        name: "Biznes reja",
        link: `/${activeLang}/bussines_plan`,
      },
      {
        name: "Kuzatuv kengashi a'zolari tarkibi",
        link: `/${activeLang}/supervisory_board`,
      },
      {
        name: "Choraklik va yillik hisobotlar",
        link: `/${activeLang}/reports`,
      },
      {
        name: "Taftish komissiyasi tarkibi",
        link: `/${activeLang}/inspection`,
      },
      {
        name: "Ichki audit xizmati",
        link: `/${activeLang}/internal_audit`,
      },
      {
        name: "Ichki hujjatlar",
        link: `/${activeLang}/internal_documents`,
      },
      {
        name: "Tashqi audit xulosasi",
        link: `/${activeLang}/external_audit_conclusion`,
      },
    ],
  },
];

export default function SubHeader() {
  return (
    <div className={`${flex.alignCenter} justify-between mt-4 py-1`}>
      <Logo className="hidden w-[53px] h-[96px]" />
      {siteRoutes.map((route, index) => (
        <SubHeaderItem route={route} key={index} />
      ))}
    </div>
  );
}
