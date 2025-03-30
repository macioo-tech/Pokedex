import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { NotificationContext } from "../context/NotificationContext";
import { LocalApi } from "../services/api";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const { handleNotification } = useContext(NotificationContext);
  const navigate = useNavigate();

  const onSubmit = async (data, event) => {
    if (!isLoggedIn) {
      event.preventDefault();
      const { user, password } = data;

      try {
        const response = await LocalApi.get(
          `users?username=${user}&password=${password}`
        );
        if (response.data?.length > 0) {
          setIsLoggedIn(true);
          handleNotification("Log in successful!");
          localStorage.setItem("userIsLoggedIn", true);
          navigate("/");
        } else {
          handleNotification("Incorrect username or password!");
          setIsLoggedIn(false);
        }
      } catch {
        handleNotification("Log in failed. Network error!");
        setIsLoggedIn(false);
      }
    } else { 
      setIsLoggedIn(false);
      localStorage.setItem("userIsLoggedIn", false);
      handleNotification("User has been logged out");
      navigate("/");
    }
  };
  return { onSubmit, isLoggedIn };
};

export default useLogin;
