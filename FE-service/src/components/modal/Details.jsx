import { Box, Stats, Type, Info, Button, Image } from "../index";
import {
  HeartIcon as HeartSolid,
  PuzzlePieceIcon as ArenaSolid,
} from "@heroicons/react/16/solid";
import {
  HeartIcon as HeartOutline,
  PuzzlePieceIcon as ArenaOutline,
} from "@heroicons/react/24/outline";
import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import {
  useStats,
  useFetchFavourites,
  useAddToFavourites,
  useFetchArena,
  useAddToArena,
} from "./hooks.js";

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
  const { name, img, height, weight, ability, experience } = item;
  
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
        <Box variant="row">
          <Image src={img} alt={name} />
          <Box>
            <Type variant="title">{name}</Type>
            <Info
              height={height}
              weight={weight}
              base={experience}
              ability={ability}
            />
            {isLoggedIn && (
              <Box variant="column">
                <Box>
                  <Button
                    size="xl"
                    fc="poke"
                    onClick={() => toggleFavourite(isFavourite, item, event)}
                  >
                    {isFavourite ? (
                      <HeartSolid className="size-14" />
                    ) : (
                      <HeartOutline className="size-14" />
                    )}
                  </Button>
                  <Type>{isFavourite ? "Remove from" : "Add to"}</Type>
                  <Type>Favourites</Type>
                </Box>
                <Box variant="column">
                  <Box>
                    <Button
                      size="xl"
                      fc="poke"
                      onClick={() => toggleArena(isInArena, item, event)}
                    >
                      {isInArena ? (
                        <ArenaSolid className="size-14" />
                      ) : (
                        <ArenaOutline className="size-14" />
                      )}
                    </Button>
                    <Type>{isInArena ? "Remove from" : "Add to"}</Type>
                    <Type>Arena {isTotalInArena}/2</Type>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Details;
