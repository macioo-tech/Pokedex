import { cva } from "class-variance-authority";
import { cn } from "clsx-for-tailwind";

const divVariants = cva("", {
  variants: {
    variant: {
      default: "",
      body: "relative flex flex-col w-full h-full shadow-md rounded-xl bg-clip-border",
      header: "relative mx-4 mt-4 overflow-hidden rounded-none bg-clip-border",
      table: "p-6 px-0 overflow-scroll",
      pagination: "flex items-center justify-between p-4 border-t border-blue-gray-50",
    },
    theme: {
      light: "text-gray-700 bg-white",
    },
  },
  defaultVariants: {
    variant: "default",
    theme: "light",
  },
});

const Container = ({ className, children, variant, theme, ...props }) => {
  const divClasses = cn(divVariants({ variant, theme, className }));

  return (
    <div {...props} className={divClasses}>
      {children}
    </div>
  );
};

export default Container;
