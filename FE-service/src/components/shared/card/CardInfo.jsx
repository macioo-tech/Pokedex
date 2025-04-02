import { Box, Type } from "../../index";

const CardInfo = ({ height, weight, base, ability }) => {
  return (
    <>
      <Box variant="column" className="border-none shadow-none">
        <Box className="border-none shadow-none">
          <Type>{height}</Type>
          <Type variant="bold">Height</Type>
          <Type>{weight}</Type>
          <Type variant="bold">Weight</Type>
        </Box>
        <Box className="border-none shadow-none">
          <Type>{base}</Type>
          <Type variant="bold">Base experience</Type>
          <Type>{ability}</Type>
          <Type variant="bold">Ability</Type>
        </Box>
      </Box>
    </>
  );
};

export default CardInfo;
