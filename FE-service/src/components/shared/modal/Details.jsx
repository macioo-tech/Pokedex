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
import useFetchFavourites from "../../../hooks/useFetchFavourites";
import useFetchArena from "../../../hooks/useFetchArena";
import useAddToFavourites from "../../../hooks/useAddToFavourites";
import useAddToArena from "../../../hooks/useAddArena";

const Details = ({ onClose, ...item }) => {
  const { win, lost, showStats } = useStats(item);
  const { refFavourite, isFavourite, refetchFavourites } =
    useFetchFavourites(item);
  const { toggleFavourite } = useAddToFavourites(
    refetchFavourites,
    refFavourite
  );
  const { refArena, isInArena, isTotalInArena, refetchArena } =
    useFetchArena(item);
  const { toggleArena } = useAddToArena(refetchArena, refArena, isTotalInArena);
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
              <Button
                size="xl"
                fc="red"
                onClick={() => toggleFavourite(isFavourite, item, event)}
              >
                {isFavourite ? (
                  <HeartSolid className="size-14" />
                ) : (
                  <HeartOutline className="size-14" />
                )}
              </Button>
              <Button
                size="xl"
                fc="red"
                onClick={() => toggleArena(isInArena, item, event)}
              >
                {isInArena ? (
                  <FireSolid className="size-14" />
                ) : (
                  <FireOutline className="size-14" />
                )}
                <Type>{isTotalInArena} / 2</Type>
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Details;
