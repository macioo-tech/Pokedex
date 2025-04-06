import {Box, Type} from "../index"

const EmptyContent = ({
  focus = "Coudn't find your Pokemons",
  hint = "Network error occured. Check you internet connection",
}) => {
  return (
    <Box size="screen">
      <Type variant="focus" color="inactive">
        {focus}
      </Type>
      <Type>{hint}</Type>
    </Box>
  );
};

export default EmptyContent;
