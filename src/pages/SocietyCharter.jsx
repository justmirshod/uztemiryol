import { Helmet } from "react-helmet-async";
import SocietyCharterView from "../sections/SocietyCharterView";

export default function SocietyCharter() {
  return (
    <>
      <Helmet>
        <title>Jamiyat ustavi</title>
      </Helmet>
      <SocietyCharterView />
    </>
  );
}
