import { Link } from "react-router-dom";

export default function Categories() {
  const elements = [
    {
      icon: "fa-solid fa-envelope",
      name: "Yangiliklar",
      link: "/uz/news",
    },
    {
      icon: "fa-solid fa-image",
      name: "Galereya",
      link: "/uz/photos",
    },
    {
      icon: "fa-solid fa-video",
      name: "Videolar",
      link: "/uz/videos",
    },
    {
      icon: "fa-solid fa-scroll",
      name: "E'lonlar",
      link: "/uz/announcements",
    },
    {
      icon: "fa-solid fa-money-bill",
      name: "Tenderlar",
      link: "/uz/tenders",
    },
  ];

  const renderCategories = () => {
    return elements?.map((item) => {
      return (
        <Link
          to={`${item?.link}`}
          className="category-item flex items-center gap-2 py-3 leading-8 border-b font-semibold hover:text-[#0459c4] border-[#e5e5e5] transition-all duration-300 ease"
        >
          <span>
            <i className={`${item?.icon} text-[#0459c4]`}></i>
          </span>
          <p>{item?.name}</p>
        </Link>
      );
    });
  };
  return (
    <div className="widget categories-widget pt-14">
      <div className="flex gap-1 justify-center">
        <div className="w-2 h-[0.125rem] bg-[#0459c4]"></div>
        <div className="w-9 h-[0.125rem] bg-[#0459c4]"></div>
        <div className="w-2 h-[0.125rem] bg-[#0459c4]"></div>
      </div>
      <p className="text-[1.25rem] leading-[1.6] font-semibold text-center pt-[1rem]">
        Kategoriyalar
      </p>
      <div className="category-list">{renderCategories()}</div>
    </div>
  );
}
