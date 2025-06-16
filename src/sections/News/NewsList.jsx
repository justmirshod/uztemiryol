import React from "react";
import NewsListItem from "./NewsListItem";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import { useLocation } from "react-router-dom";

function NewsList() {
  const { blogs, loading } = useSelector((state) => state.blogs);
  const { pathname } = useLocation();

  const renderNews = () => {
    if (loading) return <Loader />;
    if (!blogs?.results?.length) return <h1>Hech narsa topilmadi</h1>;
    return blogs?.results?.map((item, index) => {
      return <NewsListItem {...item} key={index} />;
    });
  };

  return (
    <div
      className={`grid ${
        pathname?.includes("tenders") ? "grid-cols-1" : "grid-cols-2"
      } gap-8`}
    >
      {renderNews()}
    </div>
  );
}

export default NewsList;
