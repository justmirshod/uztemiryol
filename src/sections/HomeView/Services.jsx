import Container from "../../components/Container";

import emblem_icon from "../../assets/icons/gerb.png";
import { flex } from "../../classes";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      name: t("trains"),
      icon: emblem_icon,
    },
    {
      name: t("tourist_services"),
      icon: emblem_icon,
    },
    {
      name: t("ad_services"),
      icon: emblem_icon,
    },
    {
      name: t("state_services"),
      icon: emblem_icon,
    },
    {
      name: t("how_to_buy_ticket"),
      icon: emblem_icon,
    },
    {
      name: t("how_to_buy_ticket"),
      icon: emblem_icon,
    },
  ];

  return (
    <div className="bg-white py-10 md:py-20">
      <Container>
        <h1 className="text-2xl md:text-3xl lg:text-[36px] font-semibold mb-4 md:mb-6">
          {t("services")}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10">
          {services?.map((item, index) => (
            <div
              key={index}
              className={`${flex.alignCenter} shadow-custom1 cursor-pointer py-4 px-3 rounded-md`}
            >
              <img
                src={item.icon}
                width="40px"
                height="40px"
                className="mr-3 md:mr-4 w-10 h-10 md:w-[60px] md:h-[60px]"
                alt=""
              />
              <p className="text-base md:text-lg lg:text-xl">{item?.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
