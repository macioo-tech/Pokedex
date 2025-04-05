import { Box, Stats, Type, Info, Button, Image } from "../../index";
import {
  HeartIcon as HeartSolid,
  FireIcon as FireSolid,
} from "@heroicons/react/16/solid";
import {
  HeartIcon as HeartOutline,
  FireIcon as FireOutline,
} from "@heroicons/react/24/outline";
import { useContext } from "react";
import { LoginContext } from "../../../context/LoginContext";
import useStats from "../../../hooks/useStats";
import usePostFavourites from "../../../hooks/usePostFavourites";

const Details = ({ onClose, ...item }) => {
  const { win, lost, showStats } = useStats(item);
  const { isFavourite } = usePostFavourites(item);
  const { isLoggedIn } = useContext(LoginContext);
  const { name, img, height, weight, base, ability } = item;

  return (
    <Box variant="modal" size="screen" onClick={onClose}>
      <Box
        variant="details"
        border="yes"
        bg="yes"
        shadow="yes"
        onClick={(e) => e.stopPropagation()}
      >
        {showStats && <Stats win={win} loss={lost} />}
        <Image src={img} alt={name} />
        <Box>
          <Type variant="title">{name}</Type>
          <Info height={height} weight={weight} base={base} ability={ability} />
          {isLoggedIn && (
            <Box variant="column">
              <Button variant="icon">
                {isFavourite ? (
                  <HeartSolid strokeWidth={2} className="size-14" />
                ) : (
                  <HeartOutline strokeWidth={2} className="size-14" />
                )}
              </Button>
              <Button variant="icon">
                <FireOutline strokeWidth={2} className="size-14" />
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Details;
