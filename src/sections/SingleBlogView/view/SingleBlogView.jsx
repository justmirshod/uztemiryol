import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleBlog } from "../../../api/blog";
import { formatImgLink } from "../../../utils/format-image-link";
import { formatDate } from "../../../utils/format-date";
import Loader from "../../../components/Loader/Loader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../index.css";

function SingleBlogView() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleBlog, blogLoading } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(getSingleBlog(id));
  }, [id]);

  if (blogLoading) return <Loader />;
  if (!singleBlog?.id) return <h1>Hech narsa topilmadi</h1>;

  return (
    <section className="blog-image">
      <div className="img-box">
        {singleBlog?.images?.length ? (
          <Swiper modules={[Navigation, Pagination]} pagination={true}>
            {singleBlog?.images?.map((item) => (
              <SwiperSlide>
                <img
                  src={
                    "https://storage.kun.uz/source/thumbnails/_medium/10/RkzPKmsBaKlVFz5ZIozRtkEJTrb1HF7l_medium.jpg" ||
                    formatImgLink(singleBlog?.images[0].image)
                  }
                  alt=""
                  className="border w-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
      </div>
      <div className="meta-details mt-8">
        <p className="text-[#bcbcbc] font-semibold ">
          {formatDate(singleBlog?.created_at)}
        </p>
      </div>
      <p className="blog-title font-bold text-[2rem] text-[#212121]">
        {singleBlog?.title}
      </p>
      <div
        dangerouslySetInnerHTML={{ __html: singleBlog?.description }}
        className="text-[#666]"
      ></div>
    </section>
  );
}

export default SingleBlogView;
