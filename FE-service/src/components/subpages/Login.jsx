import { useForm, FormProvider } from "react-hook-form";
import { Input, Button, Box, Type } from "../index";
import { AtSymbolIcon, LockClosedIcon } from "@heroicons/react/16/solid";
import { NavLink } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const { onSubmit } = useLogin();
  const methods = useForm({
    shouldUnregister: false,
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { handleSubmit } = methods;

  return (
    <Box border="yes" shadow="yes">
      <Type variant="title">Log into your account</Type>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box size="content">
          <Input
            name="email"
            label="email"
            icon={
              <AtSymbolIcon className="size-10" />
            }
          />
          <Input
            name="password"
            label="password"
            icon={
              <LockClosedIcon
                className="size-10"
              />
            }
            type="password"
          />
          <Box variant="row">
            <Button type="submit">Log in</Button>
            <Button>
              <NavLink to="/signup">Sign up</NavLink>
            </Button>
          </Box>
          </Box>
        </form>
      </FormProvider>
    </Box>
  );
};

export default Login;
