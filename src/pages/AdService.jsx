import { Helmet } from "react-helmet-async";
import AdServiceView from "../sections/AdServiceView";

export default function AdService() {
  return(
    <>
      <Helmet>
        <title>Reklama xizmatlari</title>
      </Helmet>
      <AdServiceView />
    </>
  )
}