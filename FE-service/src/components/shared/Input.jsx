import { useFormContext } from "react-hook-form";

const Input = ({ name , label, icon, ...props }) => {
  
  const {
    register,
    formState: { errors },
  } = useFormContext();
  
  const errorMessage = errors[name]?.message;

  return (
    <div
      className={"flex w-full border border-indigo-800 rounded-lg p-4 shadow-lg }"}
    >
      {icon}
      <input        
        type="text"
        placeholder={label}
        {...register(name)}
        {...props}
        className="w-full bg-transparent border-none outline-none text-xl ml-1 placeholder:text-gray-500 text-black"
      />
      {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}
    </div>
  );
};

export default Input;
