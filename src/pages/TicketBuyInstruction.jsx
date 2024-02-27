import { Helmet } from "react-helmet-async";
import TicketBuyInstructionView from "../sections/TicketBuyInstructionView";

export default function TicketBuyInstruction() {
  return(
    <>
      <Helmet>
        <title>
          Elektron chiptani qanday xarid qilish kerak?
        </title>
      </Helmet>
      <TicketBuyInstructionView />
    </>
  )
}