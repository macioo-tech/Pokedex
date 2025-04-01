import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { LoginContext } from "../../../context/LoginContext";
import { Box, Stats, Title, Details, CardInfo, Button } from "../../index";

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
        <Title>{name}</Title>
        <img src={img} alt={name} className="object-cover scale-50" />
        <CardInfo
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
