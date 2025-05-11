import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { enqueueSnackbar } from "notistack";
import { LocalApi } from "../services/api";
import { useNavigate } from "react-router-dom";

const useCreatePokemon = (pokemons) => {
  const { isLoggedIn } = useContext(LoginContext);
  const navigate = useNavigate();

  const onSubmit = async (data, event) => {
    if (!isLoggedIn) {
      navigate("/");
      return;
    }

    if (pokemons.find((pokemon) => pokemon.name === data.name)) {
      enqueueSnackbar(`Pokemon ${data.name} exists. Try another name.`, { variant: "error" });
      return;
    }

    event.preventDefault();
    try {
      await LocalApi.post(`/edits`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      enqueueSnackbar(`New pokemon ${data.name} created succesfully`, { variant: "success" });
      navigate("/");
    } catch {
      enqueueSnackbar(`Invalid data. Try again...`, { variant: "error" });
    }
  };
  return { onSubmit };
};

export default useCreatePokemon;
