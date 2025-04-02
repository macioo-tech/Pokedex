import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { LoginContext } from "../../context/LoginContext";
import { Box, Stats, Type, Details, Info, Button, Image } from "../index";

const Card = ({ ...item }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { isLoggedIn } = useContext(LoginContext);
  const { name, img, height, weight, base, ability } = item;

  const modal = createPortal(
    <Details {...item} onClose={() => setShowDetails(false)} />,
    document.body
  );

  console.log(setShowDetails);

  return (
    <Box variant="card">
      {!isLoggedIn && <Stats win={1} loss={1} />}
      <Button variant="card" size="card" onClick={() => setShowDetails(true)}>
        <Type variant="title">{name}</Type>
        <Image src={img} alt={name} variant="sm"/>
        <Info
          height={height}
          weight={weight}
          base={base}
          ability={ability}
        />
      </Button>
      {showDetails && modal}
    </Box>
  );
};

export default Card;
