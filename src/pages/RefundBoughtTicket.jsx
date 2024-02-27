import { Helmet } from "react-helmet-async";
import RefundBoughtTicketView from "../sections/RefundBoughtTicketView";

export default function RefundBoughtTicket() {
  return(
    <>
      <Helmet>
        <title>Sotilgan chiptani qanday qaytarish mumkin?</title>
      </Helmet>
      <RefundBoughtTicketView />
    </>
  )
}