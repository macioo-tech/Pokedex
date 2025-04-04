import { useFormContext } from "react-hook-form";
import Box from "./Box";

const Input = ({ name, label, icon, ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message;

  return (
    <Box variant="row" className="text-indigo-800 p-2">
      {icon}
      <input
        type="text"
        placeholder={label}
        {...register(name)}
        {...props}
        className="w-full bg-transparent border-none outline-none text-xl ml-1 placeholder:text-gray-500 text-black"
      />
      {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}
    </Box>
  );
};

export default Input;
