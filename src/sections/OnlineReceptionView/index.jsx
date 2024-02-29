import { useTranslation } from "react-i18next";
import Container from "../../components/Container";

export default function OnlineReceptionView() {
  const { t } = useTranslation();

  return (
    <Container className="py-20">
      <h1 className="text-2xl font-medium mb-8">{t("online_reception")}</h1>
      <p className="text-blue-700 mb-6 text-xl font-medium  ">
        {t("contact_page.dear_users")}
      </p>
      <p className="mb-6">{t("contact_page.content")}</p>
      <p className="text-blue-700 text-xl font-medium">
        {t("contact_page.honorly")}
      </p>
    </Container>
  );
}
