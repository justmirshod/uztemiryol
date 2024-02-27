import PropTypes, { element } from "prop-types";
import Search from "../Search";
import Categories from "./components/Categories";

export default function MediaSidebar({ elements, className }) {
  return (
    <div className={`col-span-3 ${className}`}>
      <Search />
      <Categories />
    </div>
  );
}

MediaSidebar.PropTypes = {
  elements: PropTypes.array.isRequired,
};
