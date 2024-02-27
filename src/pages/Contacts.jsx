import { Helmet } from "react-helmet-async";
import ContactsView from "../sections/ContactsView";

export default function Contacts() {
  return (
    <>
      <Helmet>
        <title>Bog'lanish</title>
      </Helmet>
      <ContactsView />
    </>
  );
}
