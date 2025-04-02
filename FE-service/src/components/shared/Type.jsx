import { cva } from "class-variance-authority";
import { cn } from "clsx-for-tailwind";

const typeVariants = cva("bg-transparent text-center font-mono", {
  variants: {
    variant: {
      default: "text-md p-1",
      bold: "text-md font-bold p-1",
      title: "text-2xl font-bold p-4",
    },
    size: {
      default: "",
      sm: "h-9 p-2",
      lg: "h-11 p-8",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Type = ({ className, children, variant, size, ...props }) => {
  const typeClasses = cn(typeVariants({ variant, size, className }));

  return <div type="button" {...props} className={typeClasses} >{children}</div>;
};

export default Type;
