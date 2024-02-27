import { Outlet } from "react-router";
import MediaSidebar from "../components/MediaSidebar";
import Container from "../components/Container";

export default function MediaSubLayout() {
  return (
    <Container>
      <div className="grid grid-cols-12 p-[2.5rem] mt-[2.5rem]">
        <div className="col-span-9">
          <Outlet />
        </div>
        <MediaSidebar />
      </div>
    </Container>
  );
}
