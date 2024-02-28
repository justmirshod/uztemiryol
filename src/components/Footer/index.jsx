import { flex } from "../../classes";
import Container from "../Container";
import Logo from "../Logo";

//icons
import instagram_icon from "../../assets/icons/instagram.png";
import telegram_icon from "../../assets/icons/telegram.png";
import youtube_icon from "../../assets/icons/youtube.png";
import facebook_icon from "../../assets/icons/facebook.png";
import { Link } from "react-router-dom";

export default function Footer() {
  const activeLang = localStorage.getItem("i18nextLng") || "uz";

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
        {
          name: `"Temiryo'leksress" AJ ma'lumotxonasining telefon raqami`,
          link: `/${activeLang}/company-contact`,
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
          link: `/${activeLang}/public_services`,
        },
        {
          name: " Elektron chiptani qanday harid qilish mumkin?",
          link: `/${activeLang}/ticket_buy_instruction`,
        },
        {
          name: "Elektron chiptani qanday qaytarish kerak?",
          link: `/${activeLang}/ticket_return_instruction`,
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
          link: `/${activeLang}/desicions`,
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
        {
          name: "Kol markaz",
          link: `/${activeLang}/call_center`,
        },
      ],
    },
  ];

  const renderSubRoutesOfMainRoute = (mainRoute) => {
    return siteRoutes?.find((item) => item.title === mainRoute).routes;
  };

  return (
    <div className="bg-[#21262C]">
      <Container>
        <div className={`grid grid-cols-12 gap-24 py-20`}>
          <div className="col-span-3 flex flex-col">
            <div className={`${flex.alignCenter}`}>
              <Logo className="w-[83px] h-[96px]" />
              <h1 className="text-xl font-semibold ml-2 text-white">
                O'ztemiryo'lyo'lovchi{" "}
                <p className="font-medium text-base text-white">
                  Aksiyadorlik jamiyati
                </p>
              </h1>
            </div>
            <div className="mt-32">
              <i className="fa-solid fa-location-dot text-white mr-2"></i>
              <span className="text-white">
                Toshkent, Amir Temur 16. 190-uy
              </span>
            </div>
            <div className="mt-6">
              <i className="fa-solid fa-phone text-white mr-2"></i>
              <span className="text-white">+998 (99) 211-35-16</span>
            </div>
            <div className="mt-6">
              <i className="fa-regular fa-message text-white mr-2"></i>
              <span className="text-white">express@info.uz</span>
            </div>
            <div className={`${flex.alignCenter} mt-5`}>
              <a href="https://t.me/railwayexpress_uz" target="_blank">
                <img src={telegram_icon} className="w-8 h-8 mr-3" alt="" />
              </a>
              <a
                href="https://www.instagram.com/uzrailwayexpress?igsh=MzRlODBiNWFlZA=="
                target="_blank"
              >
                <img src={instagram_icon} className="w-8 h-8 mr-3" alt="" />
              </a>
              <a href="https://youtube.com" target="_blank">
                <img src={youtube_icon} className="w-8 h-8 mr-3" alt="" />
              </a>
              <a href="https://facebook.com" target="_blank">
                <img src={facebook_icon} className="w-8 h-8 mr-3" alt="" />
              </a>
            </div>
          </div>
          <div className="col-span-3 flex flex-col">
            <div>
              <p className="text-lg font-semibold mb-3 text-white">
                Biz haqimizda
              </p>
              {renderSubRoutesOfMainRoute("Biz haqimizda")?.map(
                (route, index) => (
                  <Link
                    to={route?.link}
                    key={index}
                    className="block mb-2 hover:text-blue-700 duration-100 text-white"
                  >
                    {route?.name}
                  </Link>
                )
              )}
            </div>
            <div className="mt-4">
              <p className="text-lg font-semibold mb-3 text-white">Jadval</p>
              {renderSubRoutesOfMainRoute("Jadval")?.map((item, index) => (
                <Link
                  to={item?.link}
                  key={index}
                  className="block mb-2 hover:text-blue-700 text-white"
                >
                  {item?.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-3 flex flex-col">
            <div>
              <p className="text-lg font-semibold mb-3 text-white">
                Matbuot markazi
              </p>
              {renderSubRoutesOfMainRoute("Matbuot markazi")?.map(
                (item, index) => (
                  <Link
                    to={item?.link}
                    key={index}
                    className="block mb-2 hover:text-blue-700 text-white"
                  >
                    {item?.name}
                  </Link>
                )
              )}
            </div>
            <div className="mt-4">
              <p className="text-lg font-semibold mb-3 text-white">
                Korporativ boshqaruv
              </p>
              {renderSubRoutesOfMainRoute("Korporativ boshqaruv")?.map(
                (item, index) => (
                  <Link
                    to={item?.link}
                    key={index}
                    className="block mb-2 hover:text-blue-700 text-white"
                  >
                    {item?.name}
                  </Link>
                )
              )}
            </div>
          </div>
          <div className="col-span-3 flex flex-col">
            <div>
              <p className="text-lg font-semibold mb-3 text-white">Xizmatlar</p>
              {renderSubRoutesOfMainRoute("Xizmatlar")?.map((item, index) => (
                <Link
                  to={item?.link}
                  key={index}
                  className="block mb-2 hover:text-blue-700 text-white"
                >
                  {item?.name}
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <p className="text-lg font-semibold mb-3 text-white">Qonunlar</p>
              {renderSubRoutesOfMainRoute("Qonunlar")?.map((item, index) => (
                <Link
                  to={item?.link}
                  key={index}
                  className="block mb-2 hover:text-blue-700 text-white"
                >
                  {item?.name}
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <p className="text-lg font-semibold mb-3 hover:text-blue-700 cursor-pointer text-white">
                Xarita
              </p>
              {renderSubRoutesOfMainRoute("Xarita")?.map((item, index) => (
                <Link
                  to={item?.link}
                  key={index}
                  className="block mb-2 hover:text-blue-700 text-white"
                >
                  {item?.name}
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <Link
                to="https://eticket.railway.uz"
                target="_blank"
                className="text-lg font-semibold mb-3 hover:text-blue-700 cursor-pointer text-white"
              >
                Chipta sotish
              </Link>
              {renderSubRoutesOfMainRoute("Xarita")?.map((item, index) => (
                <Link
                  to={item?.link}
                  key={index}
                  className="block mb-2 hover:text-blue-700 text-white"
                >
                  {item?.name}
                </Link>
              ))}
            </div>
            {/* <div className="mt-4">
              <p className="text-lg font-semibold mb-3">Jadval</p>
              {renderSubRoutesOfMainRoute("Jadval")?.map((item, index) => (
                <Link to={item?.link} key={index} className="block mb-2">
                  {item?.name}
                </Link>
              ))}
            </div> */}
          </div>
        </div>
      </Container>
    </div>
  );
}
