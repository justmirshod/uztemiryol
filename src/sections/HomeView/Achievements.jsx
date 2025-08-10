import Container from "../../components/Container";

//icons
import train_icon from "../../assets/icons/train.png";
import { flex } from "../../classes";
import { useTranslation } from "react-i18next";

export default function Achievements() {
  const { t } = useTranslation();

  const achievements = [
    {
      title: t("trains"),
      number: 6,
      icon: train_icon,
    },
    {
      title: t("trains"),
      number: 6,
      icon: train_icon,
    },
    {
      title: t("trains"),
      number: 6,
      icon: train_icon,
    },
    {
      title: t("trains"),
      number: 6,
      icon: train_icon,
    },
  ];

  return (
    <div className="bg-gray-500/80">
      <Container className="py-10 md:py-20">
        <h1 className="text-2xl md:text-3xl lg:text-[32px] font-medium mb-6 md:mb-10 text-white text-center md:text-left">
          {t("achievements")}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
          {achievements?.map((item, index) => (
            <div
              className="shadow-cardShadow bg-white rounded-md py-4 md:py-6 px-4 md:px-10"
              key={index}
            >
              <div
                className={`${flex.alignCenter} justify-between mb-3 md:mb-4`}
              >
                <p className="text-base md:text-lg lg:text-xl">{item?.title}</p>
                <img
                  src={item?.icon}
                  width={40}
                  height={40}
                  className="w-10 h-10 md:w-[60px] md:h-[60px]"
                  alt=""
                />
              </div>
              <p className="text-xl md:text-2xl">{item?.number}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
