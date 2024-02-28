import { Helmet } from "react-helmet-async";
import InspectionView from "../sections/Inspection";

export default function Inspection() {
  return (
    <>
      <Helmet>
        <title>Taftish komissiyasi tarkibi</title>
      </Helmet>
      <InspectionView />
    </>
  );
}
