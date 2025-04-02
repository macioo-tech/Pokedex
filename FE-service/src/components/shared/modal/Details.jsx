import { Box, Stats, Type, CardInfo, Button, Image } from "../../index";
import { HeartIcon, FireIcon } from  "@heroicons/react/16/solid";

const Details = ({ onClose, ...item }) => {
  const { name, img, height, weight, base, ability } = item;

  return (
    <Box variant="modal" size="screen" onClick={onClose}>
      <Box variant="details" onClick={(e) => e.stopPropagation()}>
        <Image src={img} alt={name} />
        <Box className="borfder-none shadow-none">
          <Type variant="title">{name}</Type>
          <Box variant="column">
            <Button variant="icon"><HeartIcon /></Button>
            <Button variant="icon"><FireIcon /></Button>
          </Box>
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
