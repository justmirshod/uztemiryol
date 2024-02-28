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
    <div className="bg-white py-20">
      <Container>
        <h1 className="text-[36px] font-semibold mb-6">{t("services")}</h1>
        <div className="grid grid-cols-3 gap-10">
          {services?.map((item, index) => (
            <div
              key={index}
              className={`${flex.alignCenter}  shadow-custom1 cursor-pointer py-4 px-3 rounded-md`}
            >
              <img
                src={item.icon}
                width="60px"
                height="60px"
                className="mr-4"
                alt=""
              />
              <p className="text-xl">{item?.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
