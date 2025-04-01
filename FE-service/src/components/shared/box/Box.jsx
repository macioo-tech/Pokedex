import { cva } from "class-variance-authority";
import { cn } from "clsx-for-tailwind";

const boxVariants = cva("flex bg-transparent border border-indigo-800 rounded-lg shadow-lg ", {
  variants: {
    variant: {
      default: "flex-col place-content-center place-items-center ",
      card: "relative place-content-center place-items-center  hover:shadow-2xl transition delay-150 duration-300 hover:scale-110",
    },
    size: {
      default: "h-auto w-full",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Box = ({ className, children, variant, size, ...props }) => {
  const boxClasses = cn(boxVariants({ variant, size, className }));

  return (
    <div type="button" {...props} className={boxClasses}>
      {children}
    </div>
  );
};

export default Box;
