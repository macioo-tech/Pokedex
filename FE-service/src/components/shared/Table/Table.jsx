import { cva } from "class-variance-authority";
import { cn } from "clsx-for-tailwind";

const variants = cva("w-full mt-4 text-left table-auto min-w-max", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Table = ({ className, children, variant, ...props }) => {
  const classes = cn(variants({ variant, className }));

  return (
    <div className="p-6 px-0 overflow-scroll">
      <table {...props} className={classes}>
        {children}
      </table>
    </div>
  );
};

export default Table;
