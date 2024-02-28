import { Helmet } from "react-helmet-async";
import ReportsView from "../sections/ReportsView";

export default function Reports() {
  return (
    <>
      <Helmet>
        <title>Choraklik va yillik hisobotlar</title>
      </Helmet>
      <ReportsView />
    </>
  );
}
