import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const Pagination = ({ limit, page, setPage }) => {
  const enablePrev = page !== 0;
  const enableNext = page !== limit;

  return (
    <div className="flex justify-center items-center gap-8">
      {enablePrev ? (
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => setPage((prev) => prev - 1)}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        </button>
      ) : null}
      <div className="text-gray-400 font-normal">
        Page <strong className="text-gray-900">{page}</strong> of{" "}
        <strong className="text-gray-900">{limit}</strong>
      </div>
      {enableNext ? (
         <button
         type="button"
         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => setPage((prev) => prev + 1)}
        >
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </button>
      ) : null}
    </div>
  );
};

export default Pagination;
