import { Helmet } from "react-helmet-async";
import AboutView from "../sections/AboutView/view";

export default function About() {
  return (
    <>
      <Helmet>
        <title>Biz haqimizda</title>
      </Helmet>
      <AboutView />
    </>
  );
}
