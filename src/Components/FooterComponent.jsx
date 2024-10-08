export default function FooterComponent({
  pager,
  pageSwitcher,
  pageSize,
  pageSizeChanger,
  setPageNumber,
}) {
  if (!pager) return <></>;
  const currentPage = pager.page;

  const handleNextPage = () => {
    if (currentPage < pager.pageCount) {
      pageSwitcher(() => currentPage + 1);
    }
  };

  const handlePreviousPage = () => pageSwitcher(() => currentPage - 1);

  const handlePageSizeChange = (event) => {
    if (currentPage > Math.round(pager.total / event.target.value)) {
      console.log(
        "Current page > max:: -> " +
          currentPage +
          " " +
          pager.total / event.target.value
      );
      let newPage = Math.ceil(pager.total / event.target.value);
      setPageNumber(newPage);
    }
    //total / pageSize
    pageSizeChanger(parseInt(event.target.value, 10)); // Parse the value to an integer
  };
  return (
    <>
      <section>
        {currentPage > 1 && (
          <button onClick={handlePreviousPage}>{"<-"}</button>
        )}
        Page {pager.page} of {pager.pageCount}
        <button onClick={handleNextPage}>{"->"}</button>
      </section>
      <section>
        Results per page:{" "}
        <select
          id="resultsPerPage"
          name="resultsPerPage"
          value={pageSize}
          onChange={handlePageSizeChange}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </section>
    </>
  );
}
