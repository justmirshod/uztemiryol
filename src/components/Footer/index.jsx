import { flex } from "../../classes";
import Container from "../Container";
import Logo from "../Logo";

//icons
import instagram_icon from "../../assets/icons/instagram.png";
import telegram_icon from "../../assets/icons/telegram.png";
import youtube_icon from "../../assets/icons/youtube.png";
import facebook_icon from "../../assets/icons/facebook.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const activeLang = localStorage.getItem("i18nextLng") || "uz";

  const siteRoutes = [
    {
      title: t("about_us"),
      routes: [
        {
          name: t("about_company"),
          link: `/${activeLang}/about_us`,
        },
        {
          name: t("managers"),
          link: `/${activeLang}/managers`,
        },
        {
          name: t("dev_strategy"),
          link: `/${activeLang}/development_strategy`,
        },
        {
          name: t("history"),
          link: `/${activeLang}/history`,
        },
        {
          name: t("statistics"),
          link: `/${activeLang}/statistics`,
        },
        {
          name: t("vacancies"),
          link: `/${activeLang}/vacancies`,
        },
        {
          name: t("contact"),
          link: `/${activeLang}/communications`,
        },
        {
          name: t("citizen_appeal"),
          link: `/${activeLang}/citizen_appeal`,
        },
        {
          name: t("online_reception"),
          link: `/${activeLang}/online_reception`,
        },
      ],
    },
    {
      title: t("media_center"),
      routes: [
        {
          name: t(`news`),
          link: `/${activeLang}/news`,
        },
        {
          name: t("tenders"),
          link: `/${activeLang}/tenders`,
        },
        {
          name: t("galery"),
          link: `/${activeLang}/photos`,
        },
        {
          name: t("videos"),
          link: `/${activeLang}/videos`,
        },
        {
          name: t("ads"),
          link: `/${activeLang}/announcements`,
        },
      ],
    },
    {
      title: t("map"),
      routes: [],
      link: `/${activeLang}/map`,
    },
    {
      title: t("scheduleIndex"),
      routes: [
        {
          name: t("schedule"),
          link: `/${activeLang}/schedule`,
        },
      ],
    },
    {
      title: t("ticket_sell"),
      routes: [],
      link: `https://eticket.railway.uz`,
    },
    // {
    //   title: t("services"),
    //   routes: [
    //     {
    //       name: t("trains"),
    //       link: `/${activeLang}/trains`,
    //     },
    //     {
    //       name: t("ad_services"),
    //       link: `/${activeLang}/ad_services`,
    //     },
    //     {
    //       name: t("state_services"),
    //       link: `/${activeLang}/public_services`,
    //     },
    //     {
    //       name: t("how_to_buy_ticket"),
    //       link: `/${activeLang}/ticket_buy_instruction`,
    //     },
    //     {
    //       name: t("how_to_return_ticket"),
    //       link: `/${activeLang}/ticket_return_instruction`,
    //     },
    //   ],
    // },
    {
      title: t("laws"),
      routes: [
        {
          name: t("railway_transportation_law"),
          link: `/${activeLang}/railway_transportation_law`,
        },
        {
          name: t("commands"),
          link: `/${activeLang}/commands`,
        },
        {
          name: t("decisions"),
          link: `/${activeLang}/desicions`,
        },
        {
          name: t("laws_of_republic"),
          link: `/${activeLang}/laws_of_republic`,
        },
      ],
    },
    {
      title: t("corporate_governance"),
      routes: [
        {
          name: t("society_charter"),
          link: `/${activeLang}/society_charter`,
        },
        {
          name: t("bussines_plan"),
          link: `/${activeLang}/bussines_plan`,
        },
        {
          name: t("supervisory_board"),
          link: `/${activeLang}/supervisory_board`,
        },
        {
          name: t("reports"),
          link: `/${activeLang}/reports`,
        },
        {
          name: t("inspection"),
          link: `/${activeLang}/inspection`,
        },
        {
          name: t("internal_audit"),
          link: `/${activeLang}/internal_audit`,
        },
        {
          name: t("internal_docs"),
          link: `/${activeLang}/internal_documents`,
        },
        {
          name: t("external_audit"),
          link: `/${activeLang}/external_audit_conclusion`,
        },
      ],
    },
  ];

  const renderSubRoutesOfMainRoute = (mainRoute) => {
    return siteRoutes.find((item) => item.title === mainRoute)?.routes;
  };

  return (
    <div className="bg-[#21262C]">
      <Container>
        <div className={`grid grid-cols-12 gap-24 py-20`}>
          <div className="col-span-3 flex flex-col">
            <div className={`${flex.alignCenter}`}>
              <Logo className="w-[83px] h-[96px]" />
              <h1 className="text-xl font-semibold ml-2 text-white">
                Temiryo'lekspress{" "}
                <p className="font-medium text-base text-white">
                  {t("company.extension")}
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
                href="https://www.instagram.com/afrosiyobexpress"
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
                {t("about_us")}
              </p>
              {renderSubRoutesOfMainRoute(t("about_us"))?.map(
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
              <p className="text-lg font-semibold mb-3 text-white">
                {t("scheduleIndex")}
              </p>
              {renderSubRoutesOfMainRoute(t("scheduleIndex"))?.map(
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
              <p className="text-lg font-semibold mb-3 text-white">
                {t("media_center")}
              </p>
              {renderSubRoutesOfMainRoute(t("media_center"))?.map(
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
                {t("corporate_governance")}
              </p>
              {renderSubRoutesOfMainRoute(t("corporate_governance"))?.map(
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
            {/* <div>
              <p className="text-lg font-semibold mb-3 text-white">
                {t("services")}
              </p>
              {renderSubRoutesOfMainRoute(t("services"))?.map((item, index) => (
                <Link
                  to={item?.link}
                  key={index}
                  className="block mb-2 hover:text-blue-700 text-white"
                >
                  {item?.name}
                </Link>
              ))}
            </div> */}
            <div className="mt-4">
              <p className="text-lg font-semibold mb-3 text-white">
                {t("laws")}
              </p>
              {renderSubRoutesOfMainRoute(t("laws"))?.map((item, index) => (
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
                {t("map")}
              </p>
            </div>
            <div className="mt-4">
              <Link
                to="https://eticket.railway.uz"
                target="_blank"
                className="text-lg font-semibold mb-3 hover:text-blue-700 cursor-pointer text-white"
              >
                {t("ticket_sell")}
              </Link>
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
