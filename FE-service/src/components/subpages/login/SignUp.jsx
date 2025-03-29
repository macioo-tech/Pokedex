import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Button } from "../../index";
import { schemaSignUp } from "../../../services/schemaSignUp";
import { NavLink } from "react-router-dom";
import {
  UserPlusIcon,
  AtSymbolIcon,
  LockClosedIcon,
} from "@heroicons/react/16/solid";

const SignUp = ({ setFormSubmited, setFormData }) => {
  const methods = useForm({
    shouldUnregister: false,
    resolver: zodResolver(schemaSignUp),
    defaultValues: {
      firstName: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    setFormSubmited(true);
    setFormData({ ...data });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-[1.5rem] font-mono font-bold py-10">
        Sign up your account
      </div>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center p-10 gap-y-10 border border-indigo-800 rounded-lg shadow-lg "
        >
          <Input
            name="firstName"
            label="First name or nickname"
            icon={
              <UserPlusIcon className={`text-indigo-800 h-10 cursor-pointer`} />
            }
          />
          <Input
            name="email"
            label="E-mail"
            icon={
              <AtSymbolIcon className={`text-indigo-800 h-10 cursor-pointer`} />
            }
          />
          <Input
            name="password"
            type="password"
            label="Password"
            icon={
              <LockClosedIcon
                className={`text-indigo-800 h-10 cursor-pointer`}
              />
            }
          />
          <Input
            name="repeatPassword"
            type="password"
            label="Repeat password"
            icon={
              <LockClosedIcon
                className={`text-indigo-800 h-10 cursor-pointer`}
              />
            }
          />
          <div>
            <Button type="submit">Sign up</Button>{" "}
            <Button>
              <NavLink to="/login">Log in</NavLink>
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default SignUp;
