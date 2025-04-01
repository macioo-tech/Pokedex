import { cva } from "class-variance-authority";
import { cn } from "clsx-for-tailwind";

const buttonVariants = cva("flex place-content-center place-items-center", {
  variants: {
    variant: {
      default: "bg-transparent text-indigo-800 hover:text-indigo-500 ",
      icon: "bg-transparent text-indigo-800 hover:text-indigo-500 transition delay-150 duration-150 hover:scale-110",
      outline:
        "text-indigo-800 hover:text-indigo-500 border border-indigo-800 rounded-md shadow-md hover:shadow-lg",
      card: "flex flex-col bg-transparent text-black",
    },
    size: {
      default: "h-10 p-4",
      sm: "h-9 p-2",
      lg: "h-11 p-8",
      card: "h-auto w-full p-8",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Button = ({ className, children, variant, size, ...props }) => {
  const buttonClasses = cn(buttonVariants({ variant, size, className }));

  return (
    <button type="button" {...props} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
