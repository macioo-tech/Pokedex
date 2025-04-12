import { Corner, Type, Box } from "../index";
import { XMarkIcon } from "@heroicons/react/16/solid";

const Exit = ({ ...props }) => {
  return (
    <Corner variant="tr" {...props}>
      <XMarkIcon className="size-5" />
    </Corner>
  );
};

export default Exit;
