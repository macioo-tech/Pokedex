import { InputText, Button } from "../../index";
import { AtSymbolIcon, LockClosedIcon } from "@heroicons/react/16/solid";

const Login = () => {
  return (
    <div>
      <div>Log into your account</div>
      <form>
        <div>
          <label>Email</label>
          <InputText
            icon={
              <AtSymbolIcon className="text-indigo-800 h-10 cursor-pointer" />
            }
            placeholder="Email"
          />
        </div>
        <div>
          <label>Password</label>
          <InputText
            icon={
              <LockClosedIcon className="text-indigo-800 h-10 cursor-pointer" />
            }
            type="password"
            placeholder="Password"
          />
        </div>
        <div><Button /></div>
        
      </form>
    </div>
  );
};

export default Login;
