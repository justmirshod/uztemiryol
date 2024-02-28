import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import SingleBlogView from "../sections/SingleBlogView/view/SingleBlogView";

const SingleBlog = () => {
  return (
    <>
      <Helmet>
        <title>{"Yangiliklar"}</title>
      </Helmet>
      <SingleBlogView />
    </>
  );
};

export default SingleBlog;
