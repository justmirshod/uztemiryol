import React from "react";
import { Link } from "react-router-dom";

function RecentPosts() {
  const posts = [
    {
      image:
        "https://railway.uz/upload/resize_cache/iblock/09e/1021_680_2/0a20pgihs3z8fuvjjmnga5tlg6z3fefk.jpg",
      topic: "Afrosiyobda bo'layotgan oxirig o'zgarishlar",
      date: "4 Fevral, 2024",
    },
    {
      image:
        "https://railway.uz/upload/resize_cache/iblock/692/1021_680_2/snn3a7f55oa1tavlxco2wtr4wcn8h9v3.jpg",
      topic: "Afrosiyobda bo'layotgan oxirig o'zgarishlar",
      date: "4 Fevral, 2024",
    },
    {
      image:
        "https://railway.uz/upload/resize_cache/iblock/933/1021_680_2/4tg8o33i11anguxpqefj4eskvscyut3a.jpg",
      topic: "Afrosiyobda bo'layotgan oxirig o'zgarishlar",
      date: "4 Fevral, 2024",
    },
  ];
  const renderRecentPosts = () => {
    return posts.map((item, index) => {
      return (
        <div key={index} className="flex gap-6">
          <div>
            <div className="post-image w-20 h-20">
              <img
                className="w-full h-full object-cover"
                src={item.image}
                alt=""
              />
            </div>
          </div>
          <div className="post-details">
            <Link className="font-semibold text-[15px] hover:text-[#0459c4] transition-all duration-300 ease-out cursor-pointer">
              {item.topic}
            </Link>
            <p className="mt-2 font-semibold text-[14px] text-[#bcbcbc]">
              {item.date}
            </p>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <div className="widget recent-posts-widget pt-14">
        <div className="flex gap-1 justify-center">
          <div className="w-2 h-[0.125rem] bg-[#0459c4]"></div>
          <div className="w-9 h-[0.125rem] bg-[#0459c4]"></div>
          <div className="w-2 h-[0.125rem] bg-[#0459c4]"></div>
        </div>
        <p className="text-[1.25rem] leading-[1.6] font-semibold text-center pt-[1rem]">
          Oxirgi xabarlar
        </p>
        <div className="posts-list flex flex-col gap-4 mt-[1rem]">
          {renderRecentPosts()}
        </div>
      </div>
    </div>
  );
}

export default RecentPosts;
