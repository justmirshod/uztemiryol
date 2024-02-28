import React, { useEffect, useState } from "react";

import NewsList from "../NewsList";
import Pagination from "../../../components/Pagination/Pagitnation";
import { useDispatch } from "react-redux";
import { getBlogList } from "../../../api/blog";

function NewsView() {
  const [activePage, setActivePage] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogList());
  }, []);

  return (
    <main>
      <section className="news-list ">
        <NewsList />
      </section>
      <section className="news-pagination">
        <Pagination
          pageCount={5}
          setState={setActivePage}
          activePageIndex={activePage}
        />
      </section>
    </main>
  );
}

export default NewsView;
