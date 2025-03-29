const Search = ({ icon, ...props }) => {
  return (
    <div
      className={"flex w-full border border-indigo-800 rounded-lg p-4 shadow-lg}"}
    >
      {icon}
      <input
        type="text"
        {...props}
        className="w-full bg-transparent border-none outline-none text-xl ml-1 placeholder:text-gray-500 text-black"
      />
    </div>
  );
};

export default Search;
