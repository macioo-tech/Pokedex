import {useLogin} from "./hooks"
import { useEffect } from "react";

const Logout = () => {
  const { onSubmit } = useLogin();

  useEffect(() => {
    onSubmit();
  }, []);

  return null;
};

export default Logout;
