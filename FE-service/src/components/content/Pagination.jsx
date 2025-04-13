
const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  if (totalPages == 1) return <></>;

  const disablePrev = currentPage <= 1;
  const disableNext = currentPage >= totalPages;

  return (
    <div class="flex items-center justify-between p-4 border-t border-blue-gray-50">
      <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
        Page {currentPage} of {totalPages}
      </p>
      <div class="flex gap-2">
        {!disablePrev && (
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            class="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Previous
          </button>
        )}
        {!disableNext && (
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            class="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
