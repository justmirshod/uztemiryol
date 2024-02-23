import { Helmet } from "react-helmet-async";
import HomeView from "../sections/HomeView/view";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Asosiy sahifa</title>
      </Helmet>
      <HomeView />
    </>
  );
}
