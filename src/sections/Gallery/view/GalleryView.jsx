import React, { useEffect, useState } from "react";
import GalleryList from "../GalleryList";
import Container from "../../../components/Container";
import Pagination from "../../../components/Pagination/Pagitnation";
import { useDispatch, useSelector } from "react-redux";
import { getGallery } from "../../../api/blog";

function GalleryView() {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const { gallery, galleryLoading } = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGallery({ page: +activePageIndex + 1 }));
  }, [activePageIndex]);

  return (
    <Container className="py-12">
      <section className="gallery-list">
        <GalleryList />
      </section>
      <section className="gallery-pagination">
        {gallery?.total_pages && !galleryLoading ? (
          <Pagination
            pageCount={gallery?.total_pages}
            activePageIndex={activePageIndex}
            setState={setActivePageIndex}
          />
        ) : null}
      </section>
    </Container>
  );
}

export default GalleryView;
