import { Helmet } from "react-helmet-async";
import DecisionsView from "../sections/DecisionsView";

export default function Decisions() {
  return (
    <>
      <Helmet>
        <title>Qarorlar</title>
      </Helmet>
      <DecisionsView />
    </>
  );
}
