import React, { useState } from "react";
import GalleryList from "../GalleryList";
import Container from "../../../components/Container";
import Pagination from "../../../components/Pagination/Pagitnation";

function GalleryView() {
  const [activePageIndex, setActivePageIndex] = useState(0);
  return (
    <Container className="py-12">
      <section className="gallery-list">
        <GalleryList />
      </section>
      <section className="gallery-pagination">
        <Pagination
          pageCount={5}
          activePageIndex={activePageIndex}
          setState={setActivePageIndex}
        />
      </section>
    </Container>
  );
}

export default GalleryView;
