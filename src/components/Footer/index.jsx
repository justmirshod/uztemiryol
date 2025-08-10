import { flex } from "../../classes";
import Container from "../Container";
import Logo from "../Logo";

//icons
import instagram_icon from "../../assets/icons/instagram.png";
import telegram_icon from "../../assets/icons/telegram.png";
import youtube_icon from "../../assets/icons/youtube.png";
import facebook_icon from "../../assets/icons/facebook.png";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#21262C]">
      <Container>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-24 py-10 md:py-20`}
        >
          <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col">
            <div className={`${flex.alignCenter}`}>
              <Logo className="w-[60px] h-[70px] md:w-[83px] md:h-[96px]" />
              <h1 className="text-lg md:text-xl font-semibold ml-2 text-white">
                Temiryo'lekspress{" "}
                <p className="font-medium text-sm md:text-base text-white">
                  {t("company.extension")}
                </p>
              </h1>
            </div>
            <div className="mt-16 md:mt-32">
              <i className="fa-solid fa-location-dot text-white mr-2"></i>
              <span className="text-white">
                Toshkent, Amir Temur 16. 190-uy
              </span>
            </div>
            <div className="mt-4 md:mt-6">
              <i className="fa-solid fa-phone text-white mr-2"></i>
              <span className="text-white text-sm md:text-base">
                +998 (99) 211-35-16
              </span>
            </div>
            <div className="mt-4 md:mt-6">
              <i className="fa-regular fa-message text-white mr-2"></i>
              <span className="text-white text-sm md:text-base">
                express@info.uz
              </span>
            </div>
            <div className={`${flex.alignCenter} mt-4 md:mt-5`}>
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

          <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-white">
                {t("company.name")}
              </h3>
              <p className="text-white text-sm md:text-base leading-relaxed">
                {t("company.extension")} - {t("about_us")}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
