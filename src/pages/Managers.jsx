import { Helmet } from "react-helmet-async";
import ManagersView from "../sections/ManagersView";

export default function Managers() {
  return (
    <>
      <Helmet>
        <title>Rahbariyat</title>
      </Helmet>
      <ManagersView />
    </>
  );
}
