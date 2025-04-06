import { ForwardIcon, BackwardIcon } from "@heroicons/react/16/solid";
import { Type, Button, Box } from "../index";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  if (totalPages == 1) return <></>;

  const disablePrev = currentPage <= 1;
  const disableNext = currentPage >= totalPages;

  return (
    <div className="grid grid-cols-9">
      <div></div>
      <div></div>
      <div></div>
      <Box>
        {!disablePrev && (
          <Box variant="row" className="justify-end">
            <Button size="xl" onClick={() => setCurrentPage(1)}>
              <BackwardIcon className="size-8" />
              <BackwardIcon className="size-8" />
            </Button>
            <Button
              size="xl"
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              <BackwardIcon className="size-8" />
            </Button>
          </Box>
        )}
      </Box>
      <Box>
        <Type>
          Page {currentPage} of {totalPages}
        </Type>
      </Box>
      <Box>
        {!disableNext && (
          <Box variant="row" className="justify-start">
            <Button
              size="xl"
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              <ForwardIcon strokeWidth={2} className="size-8" />
            </Button>
            <Button size="xl" onClick={() => setCurrentPage(totalPages)}>
              <ForwardIcon strokeWidth={2} className="size-8" />
              <ForwardIcon strokeWidth={2} className="size-8" />
            </Button>
          </Box>
        )}
      </Box>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Pagination;
