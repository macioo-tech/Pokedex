import { cva } from "class-variance-authority";
import { cn } from "clsx-for-tailwind";

const cornerVariants = cva(
    "absolute",
    {
      variants: {
        variant: {
          tl: "top-0 left-0 rounded-tl-md rounded-br-lg",
          tr: "top-0 right-0 rounded-tr-md rounded-bl-lg",
        },
        size: {
          md: "p-4",
          sm: "size-8 p-2",
          lg: "size-32 p-4",
        },
        bg: {
          light: "bg-white text-gray-900",
          dark: "bg-gray-900 text-white",
        },
      },
      defaultVariants: {
        variant: "tl",
        size: "md",
        bg: "dark",
      },
    }
  );
  
const Corner = ({ className, children, variant, size, bg, ...props }) => {
    const cornerClasses = cn(
        cornerVariants({ variant, size, bg, className })
      );

    return <div {...props} className={cornerClasses}>{children}</div>;
  };
  
  export default Corner;