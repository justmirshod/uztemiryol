import { Outlet } from "react-router";
import MediaSidebar from "../components/MediaSidebar";

export default function MediaSubLayout() {
  return (
    <div className="max-w-[1300px] px-4 m-auto">
      <div className="grid grid-cols-12 gap-8 mt-12 mb-12">
        <div className="col-span-12 lg:col-span-9">
          <Outlet />
        </div>
        <MediaSidebar />
      </div>
    </div>
  );
}
