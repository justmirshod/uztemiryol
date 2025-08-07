import { useTranslation } from "react-i18next";
import Container from "../../components/Container";

function AboutSection() {
  const { t } = useTranslation();

  return (
    <div className=" bg-gray-500/80 h-full border border-transparent">
      <Container className="py-4 mb-8 text-white h-full">
        <h1 className="text-[36px] font-semibold text-center mt-3 mb-3">
          {t("about_us")}
        </h1>
        <p className="leading-[1.625]">{t("about_us_text")}</p>
      </Container>
    </div>
  );
}

export default AboutSection;
