import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { enqueueSnackbar } from "notistack";
import { getItems, LocalApi } from "../services/api";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const navigate = useNavigate();

  const onSubmit = async (data, event) => {
    if (!isLoggedIn) {
      event.preventDefault();
      const { email, password } = data;

      try {
        const data = await getItems(LocalApi, `users?email=${email}&password=${password}`)
        if (data.length > 0) {
          enqueueSnackbar(`Welcome ${email}`, { variant: 'success' });
          setIsLoggedIn(true);
          localStorage.setItem("userIsLoggedIn", true);
          navigate("/");
        } else {
          enqueueSnackbar(`Wrong user or password`, { variant: 'error' });
          setIsLoggedIn(false);
        }
      } catch {
        enqueueSnackbar(`Network error`, { variant: 'error' });
        setIsLoggedIn(false);
      }
    } else {
      enqueueSnackbar("Goodbuy! You're logged out"); 
      setIsLoggedIn(false);
      localStorage.setItem("userIsLoggedIn", false);
      navigate("/");
    }
  };
  return { onSubmit, isLoggedIn };
};

export default useLogin;
