import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleBlog } from "../../../api/blog";
import { formatImgLink } from "../../../utils/format-image-link";
import { formatDate } from "../../../utils/format-date";
import Loader from "../../../components/Loader/Loader";

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
          <img src={formatImgLink(singleBlog?.images[0].image)} alt="" />
        ) : null}
      </div>
      <div className="meta-details mt-8">
        <p className="text-[#bcbcbc] font-semibold ">
          {formatDate(singleBlog?.created_at)}
        </p>
      </div>
      <img
        src="https://e9c0-213-230-125-170.ngrok-free.app/media/images/contents/9iio913oqtpg3uif8on0q2sw2yjch769.jpg"
        alt="sa"
      />
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
