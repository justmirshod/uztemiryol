import React from "react";
import avatra from "../../assets/icons/avatar-15.svg";

function NewsListItem({ title, image, date, key }) {
  return (
    <div className="news-item col-span-1" key={key}>
      <div className="shadow-cardShadow hover:bg-[#f7f7f7] hover:shadow-[none] transition-all ease-in duration-200">
        <div className="news-image">
          <img src={image} alt="" />
        </div>
        <div className="news-text p-7">
          <p className="text-[1.25rem] leading-8 font-semibold hover:text-[#0459c4] transition-all duration-300 ease-out cursor-pointer">
            {title}
          </p>
        </div>
        <div className="news-details flex items-center px-7 py-4 border-t font-semibold">
          <div className=" w-8 h-8 rounded-full">
            <img src={avatra} alt="" />
          </div>
          <p className="text-[14px]">
            admin <span className="text-[#bcbcbc]">{" / " + date}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsListItem;
