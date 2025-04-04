import { cva } from "class-variance-authority";
import { cn } from "clsx-for-tailwind";

const boxVariants = cva("bg-transparent border border-indigo-800 rounded-lg shadow-lg ", {
  variants: {
    variant: {
      default: "flex flex-col place-content-center place-items-center p-4",
      card: "relative place-content-center place-items-center  hover:shadow-2xl transition delay-100 duration-300 hover:scale-110",
      modal: "fixed grid place-items-center backdrop-blur-sm transition-opacity duration-300 px-40",
      details: "bg-white grid grid-cols-1 md:grid-cols-2 gap-10 place-content-center place-items-center",
      column: "flex flex-col md:flex-row place-content-center place-items-center",
      row: "flex flex-row place-content-center place-items-center",
      content: "grid grid-cols-1 md:grid-cols-3 gap-10 justify-between m-10",
      header: "grid grid-cols-1 md:grid-cols-2 gap-10 justify-between",
    },
    size: {
      default: "h-auto w-full",
      screen: "h-screen w-screen",
      content: ""
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
