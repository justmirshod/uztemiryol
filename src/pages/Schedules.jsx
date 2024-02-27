import { Helmet } from "react-helmet-async";
import SchedulesView from "../sections/SchedulesView";

export default function Schedules() {
  return(
    <>
      <Helmet>
        <title>Qatnovlar ro'yxati</title>
      </Helmet>
      <SchedulesView />
    </>
  )
}