import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { enqueueSnackbar } from "notistack";
import { LocalApi } from "../services/api";
import { useNavigate } from "react-router-dom";

const useSignUp = (users) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const navigate = useNavigate();

  const onSubmit = async (data, event) => {
    if (!isLoggedIn) {
      event.preventDefault();
      delete data.confirm;

      if (users.find((user) => user.name === data.name)) {
        enqueueSnackbar(`User ${data.name} exists. Try another name.`, { variant: "error" });
        return;
      }

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
