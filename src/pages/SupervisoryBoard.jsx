import React from "react";
import { Helmet } from "react-helmet-async";
import SupervisoryBoardView from "../sections/SuperviseryBoardView";

export default function SupervisoryBoard() {
  return (
    <>
      <Helmet>
        <title>Kuzatuv kengashi</title>
      </Helmet>
      <SupervisoryBoardView />
    </>
  );
}
