import { cva } from "class-variance-authority";
import { cn } from "clsx-for-tailwind";

const typeVariants = cva("bg-transparent text-center font-mono", {
  variants: {
    variant: {
      default: "",
      title: "text-2xl font-bold",
    },
    size: {
      default: "p-4",
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
