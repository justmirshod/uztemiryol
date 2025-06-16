import React from "react";
import { formatDate } from "../../utils/format-date";
import { formatImgLink } from "../../utils/format-image-link";
import { Link, useLocation, useParams } from "react-router-dom";
import { fCurrency } from "../../utils/formatNumber";

function NewsListItem({
  title,
  images,
  created_at,
  key,
  id,
  dead_line,
  start_price,
}) {
  const activeLang = localStorage.getItem("i18nextLng") || "uz";
  const { pathname } = useLocation();

  const { category } = useParams();
  return (
    <div className="news-item col-span-1" key={key}>
      <div className="shadow-cardShadow hover:bg-[#f7f7f7] hover:shadow-[none] transition-all ease-in duration-200">
        {!pathname.includes("tenders") && (
          <div className="news-image h-[300px]">
            {images.length ? (
              <img
                src={formatImgLink(images[0].image)}
                className="w-full object-cover h-full"
                alt=""
              />
            ) : null}
          </div>
        )}

        <div className="news-text p-7">
          <Link
            to={`/${activeLang}/blog-detail/${category}/${id}`}
            className="text-[1.25rem] leading-8 font-semibold hover:text-[#0459c4] transition-all duration-300 ease-out cursor-pointer"
          >
            {pathname.includes("tenders") ? (
              title
            ) : (
              <>
                {title?.split(" ")?.length > 10
                  ? title?.split(" ")?.slice(0, 10).join(" ") + "..."
                  : title}
              </>
            )}
          </Link>
          {pathname.includes("tenders") && (
            <div className="flex items-center gap-6 mt-4">
              <div className="flex items-center">
                Boshlang'ich summa:
                <button className="ml-2 bg-blue-100 w-[200px] py-2 rounded-[4px] text-green-600 font-medium">
                  {" "}
                  {fCurrency(start_price) || "0.00"} so'm
                </button>
              </div>
              <div className="flex items-center">
                Tugash sanasi:
                <button className="ml-2 bg-blue-100 w-[150px] py-2 rounded-[4px] text-blue-600 font-medium">
                  {" "}
                  {formatDate(dead_line, "allNumber")}
                </button>
              </div>
            </div>
          )}
        </div>
        {!pathname.includes("tenders") && (
          <div className="news-details flex items-center px-7 py-4 border-t font-semibold">
            <p className="text-[14px]">
              <span className="text-[#bcbcbc]">{formatDate(created_at)}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsListItem;
