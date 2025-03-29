const InputText = ({ icon, ...props }) => {
  return (
    <div
      className={`w-full border border-indigo-800 rounded-lg p-4 shadow-lg flex bg-white}`}
    >
      {icon}
      <input
        type="text"
        {...props}
        className="bg-transparent border-none outline-none text-xl ml-1 placeholder:text-gray-500 text-black w-full"
      />
    </div>
  );
};

export default InputText;
