import { Helmet } from "react-helmet-async";
import TrainsServiceView from "../sections/TrainsServiceView";

export default function TrainsService() {
  return(
    <>
      <Helmet>
        <title>Yo'lovchi poyezdlar xizmati</title>
      </Helmet>
      <TrainsServiceView />
    </>
  )
}