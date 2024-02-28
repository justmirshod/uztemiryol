import { Helmet } from "react-helmet-async";
import InternalDocsView from "../sections/InternalDocsView";
import ExternalAuditView from "../sections/ExternalAuditView";

export default function ExternalAudit() {
  return (
    <>
      <Helmet>
        <title>Tashqi audit xulosasi</title>
      </Helmet>
      <ExternalAuditView />
    </>
  );
}
