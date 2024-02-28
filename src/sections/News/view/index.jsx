import React, { useEffect, useState } from "react";
import NewsList from "../NewsList";
import Pagination from "../../../components/Pagination/Pagitnation";

function NewsView() {
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    fetch("https://e9c0-213-230-125-170.ngrok-free.app/");
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
