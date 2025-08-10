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

  // Check if there are dropdown items
  const hasDropdownItems = route?.routes && route.routes.length > 0;

  return (
    <div className={`relative ${hasDropdownItems ? "group" : ""}`}>
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
          onClick={() => hasDropdownItems && setIsOpen(!isOpen)}
        >
          {route.title}
        </button>
      )}

      {/* Desktop Dropdown - Only show if there are dropdown items */}
      {hasDropdownItems && (
        <div className="absolute h-0 group-hover:h-auto transition-all duration-300 ease-in-out overflow-hidden min-w-[300px] max-w-[400px] z-30 hidden lg:block opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
          <div className="h-[10px]"></div>
          <div className="flex flex-col bg-white box-border px-2 rounded-lg shadow-lg border border-gray-100">
            {route.routes.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="my-1 hover:text-blue-800 duration-200 text-sm py-2 px-3 rounded hover:bg-gray-50 transition-all"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Mobile/Tablet Dropdown - Only show if there are dropdown items */}
      {hasDropdownItems && (
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-96 opacity-100 transform translate-y-0"
              : "max-h-0 opacity-0 transform -translate-y-2"
          }`}
        >
          <div className="bg-white rounded-lg mt-1 p-2 shadow-lg border border-gray-200">
            {route.routes.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="block py-2 px-3 hover:bg-gray-100 rounded text-sm text-gray-800 transition-colors duration-200"
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
