import { Helmet } from "react-helmet-async";
import DevelopmentView from "../sections/DevelopmentView";

export default function DevelopmentStrategy() {
  return (
    <>
      <Helmet>
        <title>Rivojlanish strategiyasi</title>
      </Helmet>
      <DevelopmentView />
    </>
  );
}
