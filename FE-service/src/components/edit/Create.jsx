import usePokemons from "../../hooks/usePokemons";
import useFetchPokemons from "../../hooks/useFetchPokemons";
import useCreatePokemon from "../../hooks/useCreatePokemon";
import { PokeApi } from "../../services/api";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Button, Box, Type } from "../index";
import { schemaPokemons } from "../../services/schemas";
import { UserPlusIcon, AtSymbolIcon, LockClosedIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

const Create = () => {
  const { error, loading } = usePokemons(PokeApi, `pokemon?limit=${150}&offset=${0}`);
  const [id, setId] = useState(151);
  const { pokemons } = useFetchPokemons("all");
  const { onSubmit } = useCreatePokemon(pokemons);
  const methods = useForm({
    shouldUnregister: false,
    resolver: zodResolver(schemaPokemons),
    defaultValues: {
      name: "",
      weight: "",
      height: "",
      experience: "",
      img: "",
    },
  });

  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  console.log(url);

  const { handleSubmit } = methods;

  return (
    <Box border="yes" shadow="yes">
      <Type variant="title">Create your own Pokemon</Type>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box size="content">
            <Input name="name" label="Give the name of your pokemon" icon={<UserPlusIcon className="size-10" />} />
            <Input name="weight" type="number" label="What is the weight of your pokemon?" icon={<AtSymbolIcon className="size-10" />} />
            <Input name="height" type="number" label="What is the height of your pokemon?" icon={<LockClosedIcon className="size-10" />} />
            <Input name="experience" type="number" label="What is experience of your pokemon?" icon={<LockClosedIcon className="size-10" />} />
            <Input name="img" value={url} />
            <Box variant="row">
              <Button onClick={() => setId((prev) => prev - 1)}>Prev</Button>
              <img src={url} alt={id} className="relative inline-block h-32 w-32 !rounded-full object-cover object-center" />
              <Button onClick={() => setId((prev) => prev + 1)}>Next</Button>
            </Box>
            <Box variant="row">
              <Button type="submit">Create Pokemon</Button>
            </Box>
          </Box>
        </form>
      </FormProvider>
    </Box>
  );
};

export default Create;
