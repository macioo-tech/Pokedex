import { Box, Stats, Title, CardInfo, Button } from "../../index";

const Details = ({ onClose, ...item }) => {
  const { name, img, height, weight, base, ability } = item;

  return (
    <Box variant="modal" size="screen" onClick={onClose}>
      <Box variant="details" onClick={(e) => e.stopPropagation()}>
      <Box className="scroll-px-28 ">
        <img src={img} alt={name} /></Box>
        <Box className="scroll-px-28 gap-28">
          <Title>{name}</Title>
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
