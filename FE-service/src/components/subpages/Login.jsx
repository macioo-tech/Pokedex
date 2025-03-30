import { useForm, FormProvider } from "react-hook-form";
import { Input, Button } from "../index";
import { AtSymbolIcon, LockClosedIcon } from "@heroicons/react/16/solid";
import { NavLink } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const { onSubmit } = useLogin();
  const methods = useForm({
    shouldUnregister: false,
    defaultValues: {
      user: "",
      password: "",
    },
  });
  const { handleSubmit } = methods;

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
            name="user"
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
