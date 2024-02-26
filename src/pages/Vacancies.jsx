import { Helmet } from "react-helmet-async";
import VancanciesView from "../sections/VacanciesView";

export default function Vacancies() {
  return (
    <>
      <Helmet>
        <title>Bo'sh ish o'rinlari</title>
      </Helmet>
      <VancanciesView />
    </>
  );
}
