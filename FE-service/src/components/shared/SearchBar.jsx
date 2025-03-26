import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

const SearchBar = ({ ...props }) => {
  return (
    <div className="w-full rounded-lg h-[12] p-4 shadow-lg flex content-center items-center bg-gradient-to-r from-gray-200 to-white">
      <MagnifyingGlassIcon className="text-indigo-900 h-10 cursor-pointer text-center" />
      <input
        type="text"
        {...props}
        className="bg-transparent border-none outline-none text-center text-xl ml-1 placeholder:text-gray-500 text-black w-full"
      />
    </div>
  );
};

export default SearchBar;
