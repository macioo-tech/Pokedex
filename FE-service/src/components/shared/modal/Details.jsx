import { Box, Stats, Type, CardInfo, Button, Image } from "../../index";

const Details = ({ onClose, ...item }) => {
  const { name, img, height, weight, base, ability } = item;

  return (
    <Box variant="modal" size="screen" onClick={onClose}>
      <Box variant="details" onClick={(e) => e.stopPropagation()}>
        <Image src={img} alt={name} />
        <Box className="scroll-px-28 gap-28">
          <Type variant="title">{name}</Type>
          <CardInfo
            height={height}
            weight={weight}
            base={base}
            ability={ability}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Details;
