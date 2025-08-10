import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function SubHeaderItem({ route, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const handleLinkClick = () => {
    setIsOpen(false);
    if (onNavigate) {
      onNavigate();
    }
  };

  return (
    <div className="relative group">
      {route.link ? (
        <Link
          to={route.link}
          className="text-white cursor-pointer text-sm lg:text-base block py-2 lg:py-0 text-center lg:text-left hover:text-gray-300 transition-colors whitespace-nowrap lg:px-2"
          onClick={handleLinkClick}
        >
          {route.title}
        </Link>
      ) : (
        <button
          className="text-white cursor-pointer text-sm lg:text-base block py-2 lg:py-0 text-center lg:text-left w-full hover:text-gray-300 transition-colors whitespace-nowrap lg:px-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {route.title}
        </button>
      )}

      {/* Desktop Dropdown */}
      <div className="absolute h-0 group-hover:h-auto transition-all duration-100 overflow-hidden min-w-[300px] max-w-[400px] z-30 hidden lg:block">
        <div className="h-[10px]"></div>
        <div className="flex flex-col bg-white box-border px-2 rounded-lg shadow-lg">
          {route?.routes?.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="my-1 hover:text-blue-800 duration-100 text-sm py-1 px-2 rounded"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet Dropdown */}
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="bg-white rounded-lg mt-1 p-2 shadow-lg border border-gray-200">
          {route?.routes?.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="block py-2 px-3 hover:bg-gray-100 rounded text-sm text-gray-800 transition-colors"
              onClick={handleLinkClick}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
