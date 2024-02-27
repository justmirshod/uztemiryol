import { Helmet } from "react-helmet-async";
import BussinesPlanView from "../sections/BussinesPlanView";

export default function BussinesPlan() {
  return (
    <>
      <Helmet>
        <title>Biznes reja</title>
      </Helmet>
      <BussinesPlanView />
    </>
  );
}
