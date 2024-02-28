import { useEffect } from "react";
import Container from "./components/Container";
import Router from "./router";
import { useLocation, useNavigate, useParams } from "react-router";

function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App;
