import { Button, IconButton } from "@material-tailwind/react";
import { GrNext, GrPrevious } from "react-icons/gr";

const Pagination = ({ limit, page, setPage }) => {
  const pages = [...Array(limit).keys()];

  const getItemProps = (index) => ({
    variant: page === index.item ? "filled" : "text",
    color: "gray",
    onClick: () => {
        setPage(index.item)
        console.log("index", index.item);
        console.log(page);
        
        
    },
  });

  const next = () => {
    if (page === limit - 1) return;
    setPage((prev) => prev+1);
  };

  const prev = () => {
    if (page === 0) return;
    setPage((prev) => prev-1);
  };

  console.log("page", page);
  console.log("limit", limit);
  
  return (
    <div className="flex justify-center items-center gap-4 py-10">
      <Button isPill variant="ghost" onClick={prev}>
        <GrPrevious className="mr-1.5 h-4 w-4 stroke-2" />
        Previous
      </Button>
      <div className="fle items-center gap-2 px-10">
        {pages.map((item) => (
          <IconButton
            key={item}
            {...getItemProps({ item })}
            isCircular
            variant="ghost"
          >
            {item + 1}
          </IconButton>
        ))}
      </div>

      <Button isPill variant="ghost" onClick={next}>
        Next
        <GrNext className="ml-1.5 h-4 w-4 stroke-2" />
      </Button>
    </div>
  );
};

export default Pagination;
