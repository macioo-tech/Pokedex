import useSignUp from "../../hooks/useSignUp";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Button, Box, Type } from "../index";
import { schemaUsers } from "../../services/schemas";
import { NavLink } from "react-router-dom";
import { UserPlusIcon, AtSymbolIcon, LockClosedIcon } from "@heroicons/react/16/solid";
import useFetchUsers from "../../hooks/useFetchUsers";
import { LocalApi } from "../../services/api";

const SignUp = () => {
  const { users } = useFetchUsers(LocalApi, "users");
  const { onSubmit } = useSignUp(users);
  const methods = useForm({
    shouldUnregister: false,
    resolver: zodResolver(schemaUsers),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
  });

  const { handleSubmit } = methods;

  return (
    <Box border="yes" shadow="yes">
      <Type variant="title">Sign up your account</Type>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box size="content">
            <Input name="name" label="Name or nickname" icon={<UserPlusIcon className="size-10" />} />
            <Input name="email" label="example@example.com" icon={<AtSymbolIcon className="size-10" />} />
            <Input name="password" type="password" label="Password" icon={<LockClosedIcon className="size-10" />} />
            <Input name="confirm" type="password" label="Confirm password" icon={<LockClosedIcon className="size-10" />} />
            <Box variant="row">
              <Button type="submit">Sign up</Button>
              <Button>
                <NavLink to="/login">Log in</NavLink>
              </Button>
            </Box>
          </Box>
        </form>
      </FormProvider>
    </Box>
  );
};

export default SignUp;
