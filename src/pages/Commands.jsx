import { Helmet } from "react-helmet-async";
import CommandsView from "../sections/CommandsView";

export default function Commands() {
  return (
    <>
      <Helmet>
        <title>Farmoishlar</title>
      </Helmet>
      <CommandsView />
    </>
  );
}
