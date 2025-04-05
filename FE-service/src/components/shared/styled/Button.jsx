import { cva } from "class-variance-authority";
import { cn } from "clsx-for-tailwind";

const buttonVariants = cva("flex place-content-center place-items-center", {
  variants: {
    variant: {
      default: "flex-row",
      card: "flex-col",
    },
    size: {
      default: "h-10 p-4",
      sm: "h-9 p-2",
      lg: "h-11 p-8",
      xl: "h-14 p-8",
      xxl: "h-24 p-8",
      card: "h-auto w-full p-2",
    },
    fc: {
      default: "text-black",
      poke: "text-indigo-800",
      red: "text-red-500",
    },
    bg: {
      default: "bg-transparent",
      yes: "bg-indigo-500",
    },
    hover: {
      default:
        "hover:text-indigo-500 transition delay-150 duration-150 hover:scale-110",
      no: "",
    },
    border: {
      default: "border-none",
      yes: "border border-indigo-800 rounded-md",
    },
    shadow: {
      default: "shadow-none",
      yes: "shadow-md hover:shadow-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    fc: "default",
    bg: "default",
    hover: "default",
    border: "default",
    shadow: "default",
  },
});

const Button = ({
  className,
  children,
  variant,
  size,
  fc,
  bg,
  hover,
  border,
  shadow,
  ...props
}) => {
  const buttonClasses = cn(
    buttonVariants({ variant, size, fc, bg, hover, border, shadow, className })
  );

  return (
    <button type="button" {...props} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
