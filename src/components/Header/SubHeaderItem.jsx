import { Link } from "react-router-dom";

export default function SubHeaderItem({ route }) {
  return (
    <div className="relative group">
      <Link to={route.link} className="text-white cursor-pointer">
        {route.title}
      </Link>
      <div className="absolute h-0 group-hover:h-auto transition-all duration-100 overflow-hidden  min-w-[300px] max-w-[400px] z-30">
        <div className="h-[10px]"></div>
        <div className="flex flex-col bg-white box-border px-2 rounded-lg">
          {route?.routes?.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="my-1 hover:text-blue-800 duration-100"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
