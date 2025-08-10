import { Helmet } from "react-helmet-async";
import ManagersView from "../sections/ManagersView";
import { useTranslation } from "react-i18next";

export default function Managers() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>
          {t("managers") || "Rahbariyat"} - {t("company.name")}
        </title>
        <meta
          name="description"
          content={
            t("managers_description") ||
            "Meet our experienced leadership team dedicated to advancing railway transportation in Uzbekistan"
          }
        />
        <meta
          name="keywords"
          content="railway, managers, leadership, Uzbekistan, transportation"
        />
      </Helmet>
      <ManagersView />
    </>
  );
}
