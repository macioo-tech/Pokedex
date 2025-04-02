import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Button from "./styled/Button";

const Pagination = ({ length, limit, page, setPage }) => {
  const enablePrev = page !== 0;
  const enableNext = page !== limit;

  if (limit == 0 || limit == undefined) return;

  return (
    <div className="flex justify-center items-center gap-2 pb-10 font-mono text-xl">
      {enablePrev ? (
        <>
          <Button variant="icon" onClick={() => setPage(1)}>
            {"<<"}
          </Button>
          <Button variant="icon" onClick={() => setPage((prev) => prev - 1)}>
            {"<"}
          </Button>
        </>
      ) : null}
      Page <strong>{page + 1}</strong> of
      <strong>{Math.floor((length + 1) / limit)}</strong>
      {enableNext ? (
        <>
          <Button variant="icon" onClick={() => setPage((prev) => prev + 1)}>
            {">"}
          </Button>
          <Button variant="icon" onClick={() => setPage(limit)}>
            {">>"}
          </Button>
        </>
      ) : null}
    </div>
  );
};

export default Pagination;
