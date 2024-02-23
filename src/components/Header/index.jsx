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
import search_icon from "../../assets/icons/search.svg";
//classes
import { flex } from "../../classes";
import SubHeader from "./SubHeader";

//address links
const addressLinks = [
  {
    title: "Toshkent, Amir Temur 16. 190-uy",
    icon: address_icon,
  },
  {
    title: "+998 (99) 211-35-16",
    icon: phone_icon,
  },
  {
    title: "express@info.uz",
    icon: mail_icon,
  },
];

//social media
const mediaLinks = [instagram_icon, telegram_icon, youtube_icon, facebook_icon];

const siteLangs = ["UZ", "RU", "EN"];

export default function Header() {
  return (
    <div className="sticky top-0 w-full bg-[#10223ecc] header-gradient py-4 z-20 shadow-2xl">
      <Container className="">
        <div className={`${flex.alignCenter} justify-between  `}>
          <div className={`logo-part w-1/5 ${flex.alignCenter} `}>
            <Logo className="w-[80px] h-[96px]" />
            <div className="ml-3">
              <h1 className="text-xl uppercase mb-1 font-medium text-white">
                Afrosiyob Express
              </h1>
              <p className="uppercase text-sm font-medium text-white">
                Aksiyadorlik Jamiyati
              </p>
            </div>
          </div>
          <div className={`main-part w-[65%]`}>
            <div
              className={`${flex.alignCenter} justify-between pb-4 border-b`}
            >
              <div className={`address-part ${flex.alignCenter}`}>
                {addressLinks?.map((item, index) => (
                  <div className={`${flex.alignCenter} mr-4`} key={index}>
                    <img src={item?.icon} width="20px" height="20px" alt="" />
                    <span className="ml-1 text-white">{item?.title}</span>
                  </div>
                ))}
              </div>
              <div className={`social-media-apps ${flex.alignCenter}`}>
                {mediaLinks?.map((media, index) => (
                  <img
                    src={media}
                    width="30px"
                    height="30px"
                    className="mr-4"
                    key={index}
                  />
                ))}
              </div>
              <div className={`search-and-langs ${flex.alignCenter}`}>
                {/* <img
                src={search_icon}
                width="30px"
                height="30px"
                className="mr-4"
                alt=""
              /> */}
                {siteLangs.map((lang, index) => (
                  <span
                    className="uppercase font-semibold mr-2 text-white"
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
  );
}
