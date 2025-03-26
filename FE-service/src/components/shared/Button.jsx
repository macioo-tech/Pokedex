const Button = ({ children, ...props }) => {
  return (
    <button
      type="button"
      {...props}
      className=" text-indigo-800 hover:text-indigo-500 items-center p-4 ..."
    >
      {children}
    </button>
  );
};

export default Button;
