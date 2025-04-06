import { useState } from "react";
import { createPortal } from "react-dom";
import { Box, Stats, Type, Details, Info, Button, Image } from "../index";
import { useStats } from "../modal/hooks"

const Card = ({ ...item }) => {
  const { win, lost, experience, showStats } = useStats(item);
  const [showDetails, setShowDetails] = useState(false);
  const { name, img, height, weight, ability } = item;

  const modal = createPortal(
    <Details {...item} onClose={() => setShowDetails(false)} />,
    document.body
  );

  if (Object.keys(item).length === 0 || item == undefined) return (
    <Box variant="card" border="yes" shadow="yes">
      <Type variant="focus" color="inactive">This Card is Empty</Type>
      <Type>Add your Pokemon to begin the battle </Type>
    </Box>
  )

  return (
    <Box variant="card" border="yes" hover="yes" shadow="yes">
      {showStats && <Stats win={win} loss={lost} />}
      <Button variant="card" size="card" hover="no" onClick={() => setShowDetails(true)}>
        <Type variant="title">{name}</Type>
        <Image src={img} alt={name} variant="sm" />
        <Info height={height} weight={weight} base={experience} ability={ability} />
      </Button>
      {showDetails && modal}
    </Box>
  );
};

export default Card;
