import { ForwardIcon, BackwardIcon } from "@heroicons/react/16/solid";
import Box from "./styled/Box";
import Button from "./styled/Button";
import Type from "./styled/Type";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  if (totalPages == 1) return <></>;

  const disablePrev = currentPage <= 1;
  const disableNext = currentPage >= totalPages;

  return (
    <Box
      variant="row"
      size="content"
    >
      {!disablePrev ? (
        <Box variant="row">
          <Button
            size="xl"
            onClick={() => setCurrentPage(1)}
          >
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
      ) : (
        null
      )}
      <Type>
        Page {currentPage} of {totalPages}
      </Type>
      {!disableNext ? (
        <Box variant="row">
          <Button
            size="xl"
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            <ForwardIcon strokeWidth={2} className="size-8" />
          </Button>
          <Button
            size="xl"
            onClick={() => setCurrentPage(totalPages)}
          >
            <ForwardIcon strokeWidth={2} className="size-8" />
            <ForwardIcon strokeWidth={2} className="size-8" />
          </Button>
        </Box>
      ) : (
        null
      )}
    </Box>
  );
};

export default Pagination;
