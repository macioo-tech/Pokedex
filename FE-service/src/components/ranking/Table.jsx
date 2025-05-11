import useFetchPokemons from "../../hooks/useFetchPokemons";
import { useContext, useRef, useState } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { Box, EmptyContent, Loading } from "../index";
import { ChevronUpDownIcon } from "@heroicons/react/16/solid";
import Table from "../shared/Table/Table";
import TableHead from "../shared/Table/TableHead";
import TableCell from "../shared/Table/TableCell";

export const ContentRanking = () => {
  const { queryPokeList } = useContext(PokemonContext);
  const { pokemons, loading, error } = useFetchPokemons("all");
  const [sort, setSort] = useState("");
  const sortedPokemons = useRef([]);

  const handleSort = (type) => {
    if (type === "name") {
      if (sort === "ascName") {
        setSort(`asc${type}`);
        sortedPokemons.current = [...pokemons].sort((a, b) => {
          if (a.name > b.name) return -1;
          if (a.name < b.name) return 1;
          return 0;
        });
      } else {
        setSort("ascName");
        sortedPokemons.current = [...pokemons].sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
      }
    }
    if (type === "experience") {
      if (sort === "ascExperience") {
        setSort("descExperience");
        sortedPokemons.current = [...pokemons].sort((a, b) => a.experience - b.experience);
      } else {
        setSort("ascExperience");
        sortedPokemons.current = [...pokemons].sort((a, b) => b.experience - a.experience);
      }
    }
    if (type === "wins") {
      if (sort === "ascWins") {
        setSort("descWins");
        sortedPokemons.current = [...pokemons].sort((a, b) => a.win - b.win);
      } else {
        setSort("ascWins");
        sortedPokemons.current = [...pokemons].sort((a, b) => b.win - a.win);
      }
    }
    if (type === "losts") {
      if (sort === "ascLosts") {
        setSort("descLosts");
        sortedPokemons.current = [...pokemons].sort((a, b) => a.lost - b.lost);
      } else {
        setSort("ascLosts");
        sortedPokemons.current = [...pokemons].sort((a, b) => b.lost - a.lost);
      }
    }
    if (type === "weight") {
      if (sort === "ascWeight") {
        setSort("descWeight");
        sortedPokemons.current = [...pokemons].sort((a, b) => a.weight - b.weight);
      } else {
        setSort("ascWeight");
        sortedPokemons.current = [...pokemons].sort((a, b) => b.weight - a.weight);
      }
    }
    if (type === "height") {
      if (sort === "ascHeight") {
        setSort("descHeight");
        sortedPokemons.current = [...pokemons].sort((a, b) => a.height - b.height);
      } else {
        setSort("ascHeight");
        sortedPokemons.current = [...pokemons].sort((a, b) => b.height - a.height);
      }
    }
    if (type === "ability") {
      if (sort === "ascAbility") {
        setSort("descAbility");
        sortedPokemons.current = [...pokemons].sort((a, b) => {
          if (a.ability > b.ability) return -1;
          if (a.ability < b.ability) return 1;
          return 0;
        });
      } else {
        setSort("ascAbility");
        sortedPokemons.current = [...pokemons].sort((a, b) => {
          if (a.ability < b.ability) return -1;
          if (a.ability > b.ability) return 1;
          return 0;
        });
      }
    }
    if (type === "id") {
      if (sort === "ascId") {
        setSort("descId");
        sortedPokemons.current = [...pokemons].sort((a, b) => a.id - b.id);
      } else {
        setSort("ascId");
        sortedPokemons.current = [...pokemons].sort((a, b) => b.id - a.id);
      }
    }
  };

  console.log("sort", sort);

  console.log("sorted by name", sortedPokemons.current);

  if (loading)
    return (
      <Box size="screen">
        <Loading />
      </Box>
    );
  if (error) return <EmptyContent />;

  if (queryPokeList?.length === 0 || queryPokeList == undefined) {
    return <EmptyContent hint="Try searching another pokemon or refresh the page" />;
  }

  return (
    <>
      <Table>
        <TableHead>
          <TableCell onClick={() => handleSort("id")}>Id</TableCell>
          <TableCell onClick={() => handleSort("name")}>Name</TableCell>
          <TableCell onClick={() => handleSort("experience")}>Experience</TableCell>
          <TableCell onClick={() => handleSort("weight")}>Weight</TableCell>
          <TableCell onClick={() => handleSort("height")}>Height</TableCell>
          <TableCell onClick={() => handleSort("wins")}>Wins</TableCell>
          <TableCell onClick={() => handleSort("losts")}>Losts</TableCell>
          <TableCell onClick={() => handleSort("ability")}>Ability</TableCell>
        </TableHead>

        <TableRow pokemons={sortedPokemons.current.length ? sortedPokemons.current : pokemons} />
      </Table>
    </>
  );
};

export const TableHeader = ({ options }) => {
  return (
    <thead>
      <tr>
        {options.map((item) => (
          <th key={item} className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
            <p className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
              {item}
              <ChevronUpDownIcon className="size-5" />
            </p>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export const TableRow = ({ pokemons }) => {
  return (
    <tbody>
      {pokemons.map((item) => (
        <tr key={item.name}>
          <td className="p-4 border-b border-blue-gray-50">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">{item.id}</p>
          </td>
          <td className="p-4 border-b border-blue-gray-50">
            <div className="flex items-center gap-3">
              <img src={item.img} alt={item.name} className="relative inline-block h-9 w-9 !rounded-full object-cover object-center" />
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">{item.name}</p>
            </div>
          </td>
          <td className="p-4 border-b border-blue-gray-50">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">{item.experience}</p>
          </td>
          <td className="p-4 border-b border-blue-gray-50">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">{item.weight}</p>
          </td>
          <td className="p-4 border-b border-blue-gray-50">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">{item.height}</p>
          </td>
          <td className="p-4 border-b border-blue-gray-50">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">{item.win}</p>
          </td>
          <td className="p-4 border-b border-blue-gray-50">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">{item.lost}</p>
          </td>
          <td className="p-4 border-b border-blue-gray-50">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">{item.ability}</p>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
