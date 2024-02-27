import React from "react";
import NewsList from "../NewsList";

function NewsView() {
  return (
    <main>
      <section className="news-list ">
        <NewsList />
      </section>
      <section className="news-pagination"></section>
    </main>
  );
}

export default NewsView;
