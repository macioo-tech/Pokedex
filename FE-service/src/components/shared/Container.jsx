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
      "flex-between": "flex items-center justify-between gap-8 mb-8",
      "flex-reverse": "flex flex-row-reverse items-center",
    },
    theme: {
      light: "text-gray-700 bg-white",
    },
    position: {
      inhirit: "",
      center: "place-content-center place-items-center",
    },
  },
  defaultVariants: {
    variant: "default",
    theme: "light",
    position: "inhirit",
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
