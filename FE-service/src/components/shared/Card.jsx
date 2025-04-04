import { useState } from "react";
import { createPortal } from "react-dom";
import { Box, Stats, Type, Details, Info, Button, Image } from "../index";
import useStats from "../../hooks/useStats";

const Card = ({ ...item }) => {
  const { win, lost, showStats } = useStats(item);
  const [showDetails, setShowDetails] = useState(false);
  const { name, img, height, weight, base, ability } = item;

  const modal = createPortal(
    <Details {...item} onClose={() => setShowDetails(false)} />,
    document.body
  );

  return (
    <Box variant="card">
      {showStats && <Stats win={win} loss={lost} />}
      <Button variant="card" size="card" onClick={() => setShowDetails(true)}>
        <Type variant="title">{name}</Type>
        <Image src={img} alt={name} variant="sm" />
        <Info height={height} weight={weight} base={base} ability={ability} />
      </Button>
      {showDetails && modal}
    </Box>
  );
};

export default Card;
