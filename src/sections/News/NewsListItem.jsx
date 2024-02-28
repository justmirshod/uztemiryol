import React from "react";
import { formatDate } from "../../utils/format-date";
import { formatImgLink } from "../../utils/format-image-link";
import { Link, useParams } from "react-router-dom";

function NewsListItem({ title, images, created_at, key, id }) {
  const activeLang = localStorage.getItem("lang") || "uz";

  const { category } = useParams();
  return (
    <div className="news-item col-span-1" key={key}>
      <div className="shadow-cardShadow hover:bg-[#f7f7f7] hover:shadow-[none] transition-all ease-in duration-200">
        <div className="news-image">
          {images.length ? (
            <img src={formatImgLink(images[0].image)} alt="" />
          ) : null}
        </div>
        <div className="news-text p-7">
          <Link
            to={`/${activeLang}/blog-detail/${category}/${id}`}
            className="text-[1.25rem] leading-8 font-semibold hover:text-[#0459c4] transition-all duration-300 ease-out cursor-pointer"
          >
            {title.length > 67 ? title.slice(0, 67) + "..." : title}
          </Link>
        </div>
        <div className="news-details flex items-center px-7 py-4 border-t font-semibold">
          <p className="text-[14px]">
            <span className="text-[#bcbcbc]">{formatDate(created_at)}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsListItem;
