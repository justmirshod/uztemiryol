import { Helmet } from "react-helmet-async";
import CitizenAppealView from "../sections/CitizenAppealView";

export default function CitizenAppeal() {
  return (
    <>
      <Helmet>
        <title>Fuqarolar murojaati</title>
      </Helmet>
      <CitizenAppealView />
    </>
  );
}
