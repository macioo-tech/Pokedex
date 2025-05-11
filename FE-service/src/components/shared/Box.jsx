import { cva } from "class-variance-authority";
import { cn } from "clsx-for-tailwind";

const boxVariants = cva("flex flex-col place-content-center place-items-center p-4 gap-2", {
  variants: {
    variant: {
      default: "",
      card: "relative",
      modal: "fixed grid place-items-center backdrop-blur-sm backdrop-opacity-50 transition-opacity duration-300 px-40",
      details: "relative place-content-center place-items-center",
      column: "flex flex-col md:flex-row place-content-center place-items-center",
      icon: "flex flex-row place-content-center place-items-center text-indigo-800",
      content: "grid grid-cols-1 md:grid-cols-3 gap-10 justify-between",
      header: "grid grid-cols-1 md:grid-cols-2 gap-10 justify-between",
      row: "flex felx-col md:flex-row place-content-center place-items-center justyfy-between",
      submenu: "absolute top-[5rem] right-[5rem] p-[15px] rounded-[6px]",
    },
    size: {
      default: "h-full w-full",
      screen: "h-screen w-screen",
      content: "h-auto w-auto",
    },
    bg: {
      default: "bg-transparent",
      yes: "bg-white",
    },
    hover: {
      default: "",
      yes: "hover:shadow-2xl transition delay-100 duration-300 hover:scale-110",
    },
    border: {
      default: "border-none",
      yes: "border border-indigo-800 rounded-lg",
    },
    shadow: {
      default: "shadow-none",
      yes: "shadow-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    bg: "default",
    hover: "default",
    border: "default",
    shadow: "default",
  },
});

const Box = ({ className, children, variant, size, bg, hover, border, shadow, ...props }) => {
  const boxClasses = cn(boxVariants({ variant, size, bg, hover, border, shadow, className }));

  return (
    <div type="button" {...props} className={boxClasses}>
      {children}
    </div>
  );
};

export default Box;
