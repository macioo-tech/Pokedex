import { cva } from "class-variance-authority";
import { cn } from "clsx-for-tailwind";

const typeVariants = cva("bg-transparent text-center font-mono", {
  variants: {
    variant: {
      default: "text-md p-1",
      bold: "text-md font-bold p-1",
      title: "text-2xl font-bold p-4",
      focus: "text-7xl p-8",
    },
    color: {
      default: "",
      poke: "text-indigo-800",
      inactive: "text-gray-200",
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    color: "default",
  },
});

const Type = ({ className, children, variant, color, ...props }) => {
  const typeClasses = cn(typeVariants({ variant, color, className }));

  return <div type="button" {...props} className={typeClasses} >{children}</div>;
};

export default Type;
