import { cva } from "class-variance-authority";
import { cn } from "clsx-for-tailwind";

const variants = cva("", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const TableHead = ({ className, children, variant, ...props }) => {
  const classes = cn(variants({ variant, className }));

  return (
    <thead>
      <tr {...props} className={classes}>
        {children}
      </tr>
    </thead>
  );
};

export default TableHead;
