import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import { formatDate } from "../../utils/format-date";
import { recentPosts } from "../../api/recentPost";
import { formatImgLink } from "../../utils/format-image-link";

function RecentPosts() {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.recentPosts);
  useEffect(() => {
    if (posts?.results) return;
    dispatch(recentPosts(3));
  }, []);

  const renderRecentPosts = () => {
    if (loading) return <Loader />;
    if (!loading && !posts?.results?.length)
      return <h1 className="text-center">Hech narsa topilmadi</h1>;
    return posts?.results?.map((item, index) => {
      if (index <= 2) {
        return (
          <div key={index} className="flex gap-6">
            <div>
              <div className="post-image w-20 h-20">
                <img
                  className="w-full h-full object-cover"
                  src={formatImgLink(
                    item?.images?.find((_, index) => index === 0)?.image
                  )}
                  alt=""
                />
              </div>
            </div>
            <div className="post-details">
              <Link className="font-semibold text-[15px] hover:text-[#0459c4] transition-all duration-300 ease-out cursor-pointer">
                {item?.title?.length > 67
                  ? item?.title.slice(0, 30) + "..."
                  : item?.title}
              </Link>
              <p className="mt-2 font-semibold text-[14px] text-[#bcbcbc]">
                {formatDate(item?.created_at)}
              </p>
            </div>
          </div>
        );
      }
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
