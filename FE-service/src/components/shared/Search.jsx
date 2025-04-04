import Box from "./styled/Box";
import Input from "./styled/Input";

const Search = ({ icon, ...props }) => {
  return (
    <Box variant="row" className="text-indigo-800 p-2">
      {icon}
      <input
        type="text"
        {...props}
        className="w-full bg-transparent border-none outline-none text-xl ml-1 placeholder:text-gray-500 text-black"
      />
    </Box>
  );
};

export default Search;
