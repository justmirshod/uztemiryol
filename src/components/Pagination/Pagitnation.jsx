import ReactPaginate from "react-paginate";

function Pagination({ pageCount, setState, activePageIndex }) {
  const handlePageClick = (event) => {
    setState(event.selected);
  };

  return (
    <>
      <ReactPaginate
        initialPage={+activePageIndex}
        breakLabel={"..."}
        nextLabel={<i className="fa-solid fa-caret-right"></i>}
        previousLabel={<i className="fa-solid fa-caret-left"></i>}
        onPageChange={(e) => handlePageClick(e)}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        className="flex text-xl items-center justify-start m-auto mt-[50px] gap-2"
        pageLinkClassName="w-[32px] h-[32px] rounded-md text-[16px] border-box inline-flex items-center justify-center"
        activeLinkClassName="bg-[#0459c4] text-white"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default Pagination;
