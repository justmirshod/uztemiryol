import { Helmet } from "react-helmet-async";
import InternalDocsView from "../sections/InternalDocsView";

export default function InternalDocs() {
  return (
    <>
      <Helmet>
        <title>Ichki hujjatlar</title>
      </Helmet>
      <InternalDocsView />
    </>
  );
}
