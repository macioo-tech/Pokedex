import { useContext } from 'react'
import { LoginContext } from "../../../context/LoginContext";
import { useForm, FormProvider } from "react-hook-form";
import { Input, Button } from "../../index";
import { AtSymbolIcon, LockClosedIcon } from "@heroicons/react/16/solid";

import { NavLink } from "react-router-dom";


const Login = () => {
  const { isLoggedIn, setLoggedIn } = useContext(LoginContext);

  const methods = useForm({
    shouldUnregister: false,
    defaultValues: {
      firstName: "",
      password: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    setLoggedIn(true);
    console.log(isLoggedIn);
    console.log(data);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-[1.5rem] font-mono font-bold py-10">
        Log into your account
      </div>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center p-10 gap-y-10 border border-indigo-800 rounded-lg shadow-lg "
        >
          <Input
            name="firstName"
            label="email"
            icon={
              <AtSymbolIcon className={`text-indigo-800 h-10 cursor-pointer`} />
            }
          />
          <Input
            name="password"
            label="password"
            icon={
              <LockClosedIcon
                className={`text-indigo-800 h-10 cursor-pointer`}
              />
            }
            type="password"
          />
          <div>
            <Button type="submit">Log in</Button>
            <Button>
              <NavLink to="/signup">Sign up</NavLink>
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Login;
