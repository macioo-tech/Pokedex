import { cva } from "class-variance-authority";
import { cn } from "clsx-for-tailwind";
import { ChevronUpDownIcon } from "@heroicons/react/16/solid";

const cellVariants = cva("p-4 transition-colors cursor-pointer border-y ", {
  variants: {
    variant: {
      default: "",
    },
    color: {
      default: "border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50",
      poke: "border-indigo-100 bg-indigo-gray-50/50 hover:bg-indigo-gray-50",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const textVariants = cva("flex items-center justify-between gap-2 font-sans text-sm antialiased font-semi-bold leading-none opacity-70", {
  variants: {
    variant: {
      default: "",
    },
    color: {
      default: "text-blue-gray-900",
      poke: "text-indigo-800",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const TableCell = ({ className, children, variant, ...props }) => {
  const cellClasses = cn(cellVariants({ variant, className }));
  const textClasses = cn(textVariants({ variant, className }));

  return (
    <th {...props} className={cellClasses}>
      <p className={textClasses}>
        {children}
        <ChevronUpDownIcon className="size-5" />
      </p>
    </th>
  );
};

export default TableCell;
