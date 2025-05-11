import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { enqueueSnackbar } from "notistack";
import { LocalApi } from "../services/api";
import { useNavigate } from "react-router-dom";

const useSignUp = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const navigate = useNavigate();

  const onSubmit = async (data, event) => {
    if (!isLoggedIn) {
      event.preventDefault();
      delete data.confirm;

      try {
        await LocalApi.post(`/users`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        enqueueSnackbar(`Welcome ${data.name} in the Pokedex`, { variant: "success" });
        setIsLoggedIn(true);
        navigate("/");
      } catch {
        enqueueSnackbar(`Wrong user or password`, { variant: "error" });
        setIsLoggedIn(false);
      }
    } else {
      navigate("/");
    }
  };
  return { onSubmit, isLoggedIn };
};

export default useSignUp;
