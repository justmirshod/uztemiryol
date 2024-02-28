import React, { useEffect, useState } from "react";

import NewsList from "../NewsList";
import Pagination from "../../../components/Pagination/Pagitnation";

function NewsView() {
  const [activePage, setActivePage] = useState(0);


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
