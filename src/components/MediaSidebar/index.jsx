import PropTypes from "prop-types";
import Search from "../Search";
import Categories from "./components/Categories";
import RecentPosts from "../RecentPosts";

export default function MediaSidebar({ elements, className }) {
  return (
    <div className={`col-span-12 lg:col-span-3 ${className}`}>
      <div>
        <Search />
        <Categories elements={elements} />
        <RecentPosts />
      </div>
    </div>
  );
}

MediaSidebar.PropTypes = {
  elements: PropTypes.array.isRequired,
};
