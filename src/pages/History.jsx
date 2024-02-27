import { Helmet } from "react-helmet-async";
import HistoryView from "../sections/HistoryView";

export default function History() {
  return (
    <>
      <Helmet>
        <title>Tarix</title>
      </Helmet>
      <HistoryView />
    </>
  );
}
