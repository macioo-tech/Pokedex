import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Button from "./Button";

const Pagination = ({ length, limit, page, setPage }) => {
  const enablePrev = page !== 0;
  const enableNext = page !== limit;

  console.log(length);
  console.log(limit);
  
  

  return (
    <div className="flex justify-center items-center gap-2 pb-10 font-mono text-xl">
      {enablePrev ? (
        <Button onClick={() => setPage((prev) => prev - 1)}>
          <ArrowLeftIcon strokeWidth={2} className="size-8" />
        </Button>
      ) : null}
      
        Page <strong >{page+1}</strong> of
        <strong>{Math.floor(length / limit)}</strong>
      
      {enableNext ? (
         <Button onClick={() => setPage((prev) => prev + 1)}>
          <ArrowRightIcon strokeWidth={2} className="size-8" />
        </Button>
      ) : null}
    </div>
  );
};

export default Pagination;
