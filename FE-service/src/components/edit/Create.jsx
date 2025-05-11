import useCreatePokemon from "../../hooks/useCreatePokemon";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Button, Box, Type } from "../index";
import { schemaPokemons } from "../../services/schemas";
import { UserPlusIcon, AtSymbolIcon, LockClosedIcon } from "@heroicons/react/16/solid";

const Create = () => {
  const { onSubmit } = useCreatePokemon();
  const methods = useForm({
    shouldUnregister: false,
    resolver: zodResolver(schemaPokemons),
    defaultValues: {
      name: "",
      weight: "",
      height: "",
      experience: "",
    },
  });

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
