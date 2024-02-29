import { Helmet } from "react-helmet-async";
import MapView from "../sections/MapView";

export default function RailwayMap() {
  return (
    <>
      <Helmet>
        <title>Temiryo'l chizmasi</title>
      </Helmet>
      <MapView />
    </>
  );
}
