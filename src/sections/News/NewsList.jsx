import React from "react";
import NewsListItem from "./NewsListItem";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";

function NewsList() {
  const { blogs, loading } = useSelector((state) => state.blogs);

  const renderNews = () => {
    if (loading) return <Loader />;
    if (!blogs?.results?.length) return <h1>Hech narsa topilmadi</h1>;
    return blogs?.results?.map((item, index) => {
      return <NewsListItem {...item} key={index} />;
    });
  };

  return <div className="grid grid-cols-2 gap-8">{renderNews()}</div>;
}

export default NewsList;
