import { Helmet } from "react-helmet-async";
import NewsView from "../sections/News/view";

export default function News() {
  return (
    <>
      <Helmet>
        <title>Yangiliklar</title>
      </Helmet>
      <NewsView />
    </>
  );
}
