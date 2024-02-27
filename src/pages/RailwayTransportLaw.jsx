import { Helmet } from "react-helmet-async";
import RailwayTransportLawView from "../sections/RailwayTransportLawView";

export default function RailwayTransportLaw() {
  return (
    <>
      <Helmet>
        <title>Temiryo'l transporti haqida qonun</title>
      </Helmet>
      <RailwayTransportLawView />
    </>
  );
}
