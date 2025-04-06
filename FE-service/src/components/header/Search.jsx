import { Box } from "../index";

const Search = ({ icon, ...props }) => {
  return (
    <Box variant="icon" border="yes">
      {icon}
      <input
        type="text"
        {...props}
        className="bg-transparent border-none outline-none text-xl ml-1 placeholder:text-gray-500 text-black"
      />
    </Box>
  );
};

export default Search;
