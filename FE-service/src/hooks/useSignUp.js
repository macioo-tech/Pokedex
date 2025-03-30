import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { NotificationContext } from "../context/NotificationContext";
import { LocalApi } from "../services/api";
import { useNavigate } from "react-router-dom";

const useSignUp = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const { handleNotification } = useContext(NotificationContext);
  const navigate = useNavigate();

  const onSubmit = async (data, event) => {
    if (!isLoggedIn) {
      event.preventDefault();
      delete data.confirm;

      try {
        const response = await LocalApi.post(`/users`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        handleNotification("User signed up successfully!");
        setIsLoggedIn(true);
        navigate("/");
      } catch {
        handleNotification("Log in failed. Network error!");
        setIsLoggedIn(false);
      }
    } else {
      navigate("/");
    }
  };
  return { onSubmit, isLoggedIn };
};

export default useSignUp;
