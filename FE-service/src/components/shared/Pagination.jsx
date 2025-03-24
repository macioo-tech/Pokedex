import { Typography, IconButton } from "@material-tailwind/react";
import { GrNext, GrPrevious } from "react-icons/gr";

const Pagination = ({ limit, page, setPage }) => {
  const enablePrev = page !== 0;
  const enableNext = page !== limit;

  return (
    <div className="flex justify-center items-center gap-2">
      {enablePrev ? (
        <IconButton size="sm" color="secondary" variant="ghost" onClick={() => setPage((prev) => prev - 1)}>
          <GrPrevious className="text-blue-500 font-bold mr-1.5 h-4 w-4 stroke-2" />
        </IconButton>
      ) : null}
      <Typography className="flex items-center gap-1 text-foreground">
        Page
        <Typography as="span" color="default" className="font-semibold">
          {page + 1}
        </Typography>
        of
        <Typography as="span" color="default" className="font-semibold">
          {limit}
        </Typography>
      </Typography>
      {enableNext ? (
        <IconButton size="sm" color="secondary" variant="ghost" onClick={() => setPage((prev) => prev + 1)}>
          <GrNext className="text-blue-500 font-bold ml-1.5 h-4 w-4 stroke-2" />
        </IconButton>
      ) : null}
    </div>
  );
};

export default Pagination;
