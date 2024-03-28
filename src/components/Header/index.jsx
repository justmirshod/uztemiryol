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
    link: "https://www.instagram.com/uzrailwayexpress?igsh=MzRlODBiNWFlZA==",
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

  return (
    <>
      <UpHeader />
      <div
        id="main-header"
        className=" sticky top-0 w-full bg-[#10223ecc] header-gradient py-4 z-[1200] shadow-2xl"
      >
        <Container className="">
          <div className={`${flex.alignCenter} justify-between`}>
            <div className={`logo-part w-1/5 ${flex.alignCenter}`}>
              <Link to="/" className={flex.alignCenter}>
                <Logo className="w-[120px] cursor-pointer" />
                <div className="ml-3">
                  <h1 className="text-xl uppercase mb-1 font-medium text-white">
                    {t("company.name")}
                  </h1>
                  <p className="uppercase text-sm font-medium text-white">
                    {t("company.extension")}
                  </p>
                </div>
              </Link>
            </div>
            <div className={`main-part w-[70%]`}>
              <div
                className={`${flex.alignCenter} justify-between pb-4 border-b`}
              >
                <div className={`address-part ${flex.alignCenter}`}>
                  {addressLinks?.map((item, index) => (
                    <div className={`${flex.alignCenter} mr-4`} key={index}>
                      <i className={`${item?.icon} text-white text-5`}></i>
                      <span className="ml-1 text-white text-sm">
                        {item?.title}
                      </span>
                    </div>
                  ))}
                </div>
                <div className={`social-media-apps ${flex.alignCenter}`}>
                  {mediaLinks?.map((media, index) => (
                    <a href={media.link} target="_blank">
                      <img
                        src={media.icon}
                        width="30px"
                        height="30px"
                        className="mr-4"
                        key={index}
                      />
                    </a>
                  ))}
                </div>
                <div className={`search-and-langs ${flex.alignCenter}`}>
                  {siteLangs.map((lang, index) => (
                    <span
                      className="uppercase font-semibold mr-2 text-white cursor-pointer"
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
          </div>
        </Container>
      </div>
    </>
  );
}
