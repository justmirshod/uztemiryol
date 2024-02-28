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
      <Container className="py-20">
        <h1 className="text-[32px] font-medium mb-10 text-white">
          {t("achievements")}
        </h1>
        <div className="grid grid-cols-4 gap-10">
          {achievements?.map((item, index) => (
            <div
              className="shadow-cardShadow bg-white rounded-md py-6 px-10"
              key={index}
            >
              <div className={`${flex.alignCenter} justify-between mb-4`}>
                <p className="text-xl">{item?.title}</p>
                <img src={item?.icon} width={60} height={60} alt="" />
              </div>
              <p className="text-2xl">{item?.number}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
