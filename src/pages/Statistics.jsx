import { Helmet } from "react-helmet-async";
import StatisticsView from "../sections/StatisticsView";

export default function Statistics() {
  return (
    <>
      <Helmet>
        <title>Statistik ma'lumotlar</title>
      </Helmet>
      <StatisticsView />
    </>
  );
}
