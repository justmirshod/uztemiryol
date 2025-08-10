import React, { useEffect, useState } from "react";
import GalleryList from "../GalleryList";
import Container from "../../../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getGallery } from "../../../api/blog";
import { useTranslation } from "react-i18next";

function GalleryView() {
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { gallery, galleryLoading } = useSelector((state) => state.blogs);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    // Reset to page 1 when component mounts
    setCurrentPage(1);
    setHasMore(true);
    dispatch(getGallery({ page: 1 }));
  }, []);

  useEffect(() => {
    if (currentPage > 1) {
      dispatch(getGallery({ page: currentPage }));
    }
  }, [currentPage]);

  const handleLoadMore = () => {
    if (gallery?.total_pages && currentPage < gallery.total_pages) {
      setCurrentPage((prev) => prev + 1);
    } else {
      setHasMore(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <Container className="py-8 md:py-12">
        {/* Header Section */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
            {t("gallery") || "Fotogalereya"}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
            {t("gallery_description") ||
              "Temiryo'l transporti sohasidagi eng so'nggi tadbirlar, uchrashuvlar va yangiliklar"}
          </p>
        </div>

        {/* Main Gallery Content - Full Width */}
        <div className="mb-8">
          <GalleryList />
        </div>

        {/* Load More Button */}
        {hasMore &&
          gallery?.total_pages &&
          currentPage < gallery.total_pages && (
            <div className="text-center">
              <button
                onClick={handleLoadMore}
                disabled={galleryLoading}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center mx-auto"
              >
                {galleryLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    {t("loading") || "Yuklanmoqda..."}
                  </>
                ) : (
                  <>
                    <i className="fas fa-plus mr-2"></i>
                    {t("load_more") || "Ko'proq yuklash"}
                  </>
                )}
              </button>
            </div>
          )}

        {/* No More Content Message */}
        {!hasMore && gallery?.results?.length > 0 && (
          <div className="text-center py-8">
            <p className="text-gray-600 text-lg">
              {t("no_more_photos") || "Barcha fotolar yuklandi"}
            </p>
          </div>
        )}
      </Container>
    </div>
  );
}

export default GalleryView;
