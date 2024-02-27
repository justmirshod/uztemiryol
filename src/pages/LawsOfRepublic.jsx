import { Helmet } from "react-helmet-async";
import RepublicLawsView from "../sections/RepublicLawsView";

export default function LawsOfRepublic() {
  return (
    <>
      <Helmet>
        <title>O'zbekiston Respublikasi qonunlari</title>
      </Helmet>
      <RepublicLawsView />
    </>
  );
}
