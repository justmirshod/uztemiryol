import { Helmet } from "react-helmet-async";
import InternalAuditView from "../sections/InternalAuditView";

export default function InternalAudit() {
  return (
    <>
      <Helmet>
        <title>Ichki audit</title>
      </Helmet>
      <InternalAuditView />
    </>
  );
}
