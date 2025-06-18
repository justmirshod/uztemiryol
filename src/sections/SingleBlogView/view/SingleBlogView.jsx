import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { getSingleBlog } from "../../../api/blog";
import { formatImgLink } from "../../../utils/format-image-link";
import { formatDate } from "../../../utils/format-date";
import Loader from "../../../components/Loader/Loader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Icon } from "@iconify/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../index.css";
import { fCurrency } from "../../../utils/formatNumber";

function SingleBlogView() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { singleBlog, blogLoading } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(getSingleBlog(id));
  }, [id]);

  if (blogLoading) return <Loader />;
  if (!singleBlog?.id) return <h1>Hech narsa topilmadi</h1>;

  return (
    <section className="blog-image">
      {!pathname?.includes("tenders") && (
        <div className="img-box">
          {singleBlog?.images?.length ? (
            <Swiper modules={[Navigation, Pagination]} pagination={true}>
              {singleBlog?.images?.map((item) => (
                <SwiperSlide>
                  <img
                    src={formatImgLink(item?.image)}
                    alt=""
                    className="border w-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : null}
        </div>
      )}

      <div className="meta-details mt-8">
        <p className="text-[#bcbcbc] font-semibold ">
          {formatDate(singleBlog?.created_at)}
        </p>
      </div>
      <p className="blog-title font-bold text-[2rem] text-[#212121]  mb-4">
        {singleBlog?.title}
      </p>
      <div
        dangerouslySetInnerHTML={{ __html: singleBlog?.description }}
        className="text-[#666]"
      ></div>

      {pathname.includes("tenders") && (
        <>
          <div className="h-[1px] bg-gray-400 my-4"></div>

          <ul className="flex flex-col gap-2">
            <li>
              <strong>Boshlanish sanasi:</strong>
              <span> {formatDate(singleBlog?.start_date, "allNumber")}</span>
            </li>
            <li className="my-2">
              <strong>Tugash sanasi:</strong>
              <span> {formatDate(singleBlog?.dead_line, "allNumber")}</span>
            </li>
            <li>
              <strong>Boshlang'ich summa:</strong>
              <span> {fCurrency(singleBlog?.start_price)} so'm</span>
            </li>
            <li>
              <strong>Status:</strong>
              <span> {singleBlog?.active ? "Aktiv" : "Aktiv emas"}</span>
            </li>
            <li>
              <div className="flex items-center">
                <strong>Tanlov hujjatlari: </strong>
                <span className="inline-block ml-2">
                  {" "}
                  <a download href={singleBlog.document} target="__blank">
                    <button className="bg-blue-100 py-2 w-[150px] inline-flex items-center justify-center">
                      <Icon
                        icon="material-symbols-light:download-rounded"
                        width="24"
                        height="24"
                      />
                      Yuklab olish
                    </button>
                  </a>
                </span>
              </div>
            </li>
          </ul>
        </>
      )}
    </section>
  );
}

export default SingleBlogView;
