import { useFormContext } from "react-hook-form";
import Box from "./Box";

const Input = ({ name, label, icon, ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message;

  return (
    <div>
      <Box variant="icon" border="yes">
        {icon}
        <input
          type="text"
          placeholder={label}
          {...register(name)}
          {...props}
          className="min-w-96 bg-transparent border-none outline-none text-xl ml-1 placeholder:text-gray-500 text-black"
        />
      </Box>
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
    </div>
  );
};

export default Input;
