import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { enqueueSnackbar } from "notistack";
import { LocalApi } from "../services/api";
import { useNavigate } from "react-router-dom";

const useCreatePokemon = () => {
  const { isLoggedIn } = useContext(LoginContext);
  const navigate = useNavigate();

  const onSubmit = async (data, event) => {
    if (!isLoggedIn) {
      navigate("/");
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
