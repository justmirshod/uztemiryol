import { useEffect } from "react";
import { flex } from "../../classes";
import Container from "../../components/Container";

import "swiper/css";
import "swiper/css/navigation";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { recentPosts } from "../../api/recentPost";
import { formatImgLink } from "../../utils/format-image-link";
import { formatDate } from "../../utils/format-date";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";

export default function NewsPart() {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.recentPosts);
  const activeLang = localStorage.getItem("lang") || "uz";

  useEffect(() => {
    dispatch(recentPosts(6));
  }, []);

  const renderPosts = () => {
    if (loading) return <Loader />;
    if (!loading && !posts?.results?.length)
      return <h1 className="text-center">Hech narsa topilmadi</h1>;

    return posts?.results?.map((item, index) => (
      <div
        key={index}
        className="shadow-md hover:shadow-xl duration-200 rounded-lg overflow-hidden flex flex-col justify-between"
      >
        <div>
          <img
            src={formatImgLink(
              item?.images?.find((_, index) => index === 0)?.image
            )}
            className="w-full h-[280px]"
            alt=""
          />
          <div className="py-3 flex flex-col justify-between px-4">
            <Link
              to={`/${activeLang}/blog-detail/news/${item?.id}`}
              className="text-lg font-medium hover:text-blue-800 cursor-pointer"
            >
              {item?.title}
            </Link>
          </div>
        </div>
        <div className={`${flex.alignCenter} border-t`}>
          <button className="text-blue-700">
            <p className="text-[#bcbcbc] font-semibold py-4 px-7 text-[14px]">
              {formatDate(item?.created_at)}
            </p>
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="bg-white py-8">
      <Container>
        <div className="py-4">
          <div className={`${flex.alignCenter} justify-between mb-6`}>
            <h1 className="text-[36px] font-semibold ">So'nggi yangiliklar</h1>
          </div>
          <div className="grid grid-cols-3 gap-10">{renderPosts()}</div>
          <div className={`${flex.alignCenter} justify-end mt-10`}>
            <Link
              to={`/${activeLang}/blog/news`}
              className="border px-6 py-2 rounded-md hover:bg-blue-600 duration-100 text-blue-700 hover:text-white border-blue-700"
            >
              Barcha yangiliklar
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
