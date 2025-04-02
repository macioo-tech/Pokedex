import { cva } from "class-variance-authority";
import { cn } from "clsx-for-tailwind";

const imageVariants = cva("", {
  variants: {
    variant: {
      default: "object-contain",
      sm: "object-contain h-36",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Image = ({ className, variant, ...props }) => {
  const imageClasses = cn(imageVariants({ variant, className }));

  return <img {...props} className={imageClasses} />;
};

export default Image;
