import Container from "../Container";
import Logo from "../Logo";

//icons
import address_icon from "../../assets/icons/location-services-active-svgrepo-com.svg";
import phone_icon from "../../assets/icons/phone-svgrepo-com.svg";
import mail_icon from "../../assets/icons/mail-svgrepo-com.svg";
import instagram_icon from "../../assets/icons/instagram.png";
import telegram_icon from "../../assets/icons/telegram.png";
import youtube_icon from "../../assets/icons/youtube.png";
import facebook_icon from "../../assets/icons/facebook.png";
//classes
import { flex } from "../../classes";
import SubHeader from "./SubHeader";
import { Link, useLocation } from "react-router-dom";
import UpHeader from "./UpHeader";
import { useTranslation } from "react-i18next";
import { useRouter } from "../../router/hooks/use-router";
import { useState, useEffect } from "react";

//address links
const addressLinks = [
  {
    title: "Toshkent, Amir Temur 16. 190-uy",
    icon: "fa-solid fa-location-dot",
  },
  {
    title: "+998 (99) 211-35-16",
    icon: "fa-solid fa-phone",
  },
  {
    title: "express@info.uz",
    icon: "fa-regular fa-message",
  },
];

//social media
const mediaLinks = [
  {
    icon: instagram_icon,
    link: "https://www.instagram.com/afrosiyobexpress",
  },
  {
    icon: telegram_icon,
    link: "https://t.me/railwayexpress_uz",
  },
  {
    icon: youtube_icon,
    link: "https://youtube.com",
  },
  {
    icon: facebook_icon,
    link: "https://facebook.com",
  },
];

const siteLangs = ["uz", "ru", "en"];

export default function Header() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <UpHeader />
      <div
        id="main-header"
        className="sticky top-0 w-full bg-[#10223ecc] header-gradient py-2 md:py-4 z-[1200] shadow-2xl"
      >
        <Container className="">
          <div
            className={`${flex.alignCenter} justify-between flex-col lg:flex-row`}
          >
            {/* Logo and Company Info */}
            <div
              className={`logo-part w-full ${flex.alignCenter} justify-between lg:justify-start mb-2 lg:mb-0`}
            >
              <Link
                to="/"
                className={`${flex.alignCenter} flex-1 lg:flex-none`}
              >
                <Logo className="w-[80px] lg:w-[120px] cursor-pointer" />
                <div className="ml-2 lg:ml-3">
                  <h1 className="text-lg lg:text-xl uppercase mb-1 font-medium text-white">
                    {t("company.name")}
                  </h1>
                  <p className="uppercase text-xs lg:text-sm font-medium text-white">
                    {t("company.extension")}
                  </p>
                </div>
              </Link>

              {/* Mobile/Tablet Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-white p-2"
              >
                <i
                  className={`fa-solid ${
                    isMobileMenuOpen ? "fa-times" : "fa-bars"
                  } text-xl`}
                ></i>
              </button>
            </div>

            {/* Desktop Main Content */}
            <div className={`main-part w-full lg:w-[70%] hidden lg:block`}>
              <div
                className={`${flex.alignCenter} justify-between pb-4 border-b flex-col lg:flex-row`}
              >
                <div
                  className={`address-part ${flex.alignCenter} flex-wrap justify-center lg:justify-start mb-2 lg:mb-0`}
                >
                  {addressLinks?.map((item, index) => (
                    <div
                      className={`${flex.alignCenter} mr-2 lg:mr-4 mb-1 lg:mb-0`}
                      key={index}
                    >
                      <i
                        className={`${item?.icon} text-white text-xs lg:text-sm`}
                      ></i>
                      <span className="ml-1 text-white text-xs lg:text-sm">
                        {item?.title}
                      </span>
                    </div>
                  ))}
                </div>
                <div
                  className={`social-media-apps ${flex.alignCenter} justify-center lg:justify-end`}
                >
                  {mediaLinks?.map((media, index) => (
                    <a href={media.link} target="_blank" key={index}>
                      <img
                        src={media.icon}
                        width="25px"
                        height="25px"
                        className="mr-2 lg:mr-4"
                      />
                    </a>
                  ))}
                </div>
                <div
                  className={`search-and-langs ${flex.alignCenter} justify-center lg:justify-end mt-2 lg:mt-0`}
                >
                  {siteLangs.map((lang, index) => (
                    <span
                      className="uppercase font-semibold mr-2 text-white cursor-pointer text-sm"
                      onClick={() => {
                        i18n.changeLanguage(lang);
                        const routeWithoutLang = pathname.split("/");
                        routeWithoutLang.splice(1, 1, lang);
                        const newRoute = routeWithoutLang.join("/");
                        router.replace(newRoute);
                        router.reload();
                      }}
                      key={index}
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <SubHeader />
            </div>

            {/* Mobile/Tablet Menu */}
            <div
              className={`w-full lg:hidden ${
                isMobileMenuOpen ? "block" : "hidden"
              }`}
            >
              <div className="bg-[#10223e] rounded-lg mt-2 p-4">
                {/* Mobile Address Links */}
                <div className="mb-4">
                  {addressLinks?.map((item, index) => (
                    <div className={`${flex.alignCenter} mb-2`} key={index}>
                      <i
                        className={`${item?.icon} text-white text-sm mr-2`}
                      ></i>
                      <span className="text-white text-sm">{item?.title}</span>
                    </div>
                  ))}
                </div>

                {/* Mobile Social Media */}
                <div className={`${flex.alignCenter} justify-center mb-4`}>
                  {mediaLinks?.map((media, index) => (
                    <a href={media.link} target="_blank" key={index}>
                      <img
                        src={media.icon}
                        width="30px"
                        height="30px"
                        className="mr-4"
                      />
                    </a>
                  ))}
                </div>

                {/* Mobile Language Switcher */}
                <div className={`${flex.alignCenter} justify-center mb-4`}>
                  {siteLangs.map((lang, index) => (
                    <span
                      className="uppercase font-semibold mr-4 text-white cursor-pointer"
                      onClick={() => {
                        i18n.changeLanguage(lang);
                        const routeWithoutLang = pathname.split("/");
                        routeWithoutLang.splice(1, 1, lang);
                        const newRoute = routeWithoutLang.join("/");
                        router.replace(newRoute);
                        router.reload();
                        setIsMobileMenuOpen(false);
                      }}
                      key={index}
                    >
                      {lang}
                    </span>
                  ))}
                </div>

                {/* Mobile Navigation */}
                <div className="border-t pt-4">
                  <SubHeader onNavigate={() => setIsMobileMenuOpen(false)} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
