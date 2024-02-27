import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import SingleBlogView from "../sections/SingleBlogView/view/SingleBlogView";

const SingleBlog = () => {
  const { blogTitle } = useParams();
  return (
    <>
      <Helmet>
        <title>{blogTitle || "Yangiliklar"}</title>
      </Helmet>
      <SingleBlogView />
    </>
  );
};

export default SingleBlog;
