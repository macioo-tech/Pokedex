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
      variant="column"
      size="content"
      className="border-none shadow-none text-xl"
    >
      {!disablePrev ? (
        <Box variant="row" size="content" className="border-none shadow-none">
          <Button
            className="px-2"
            variant="icon"
            size="lg"
            onClick={() => setCurrentPage(1)}
          >
            <BackwardIcon strokeWidth={2} className="size-6" />
            <BackwardIcon strokeWidth={2} className="size-6" />
          </Button>
          <Button
            className="px-2"
            variant="icon"
            size="lg"
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            <BackwardIcon strokeWidth={2} className="size-6" />
          </Button>
        </Box>
      ) : (
        null
      )}
      <Type>
        Page {currentPage} of {totalPages}
      </Type>
      {!disableNext ? (
        <Box variant="row" size="content" className="border-none shadow-none">
          <Button
            className="px-2"
            variant="icon"
            size="lg"
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            <ForwardIcon strokeWidth={2} className="size-6" />
          </Button>
          <Button
            className="px-2"
            variant="icon"
            size="lg"
            onClick={() => setCurrentPage(totalPages)}
          >
            <ForwardIcon strokeWidth={2} className="size-6" />
            <ForwardIcon strokeWidth={2} className="size-6" />
          </Button>
        </Box>
      ) : (
        null
      )}
    </Box>
  );
};

export default Pagination;
