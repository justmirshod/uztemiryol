import React, { useEffect, useState } from "react";

import NewsList from "../NewsList";
import Pagination from "../../../components/Pagination/Pagitnation";
import { useDispatch, useSelector } from "react-redux";
import { getBlogList } from "../../../api/blog";
import { useParams } from "react-router-dom";

function NewsView() {
  const [activePage, setActivePage] = useState(0);
  const dispatch = useDispatch();
  const { category } = useParams();
  const { blogs } = useSelector((state) => state.blogs);
  const categoryId = [
    {
      name: "news",
      id: 10,
    },
    {
      name: "tenders",
      id: 19,
    },
    {
      name: "announcements",
      id: 12,
    },
  ];

  useEffect(() => {
    const activeCategory = categoryId.find((item) => item.name === category).id;
    dispatch(getBlogList({ id: activeCategory, page: +activePage + 1 }));
  }, [category, activePage]);

  return (
    <main>
      <section className="news-list ">
        <NewsList />
      </section>
      <section className="news-pagination">
        {blogs?.total_pages ? (
          <Pagination
            pageCount={blogs?.total_pages}
            setState={setActivePage}
            activePageIndex={activePage}
          />
        ) : null}
      </section>
    </main>
  );
}

export default NewsView;
