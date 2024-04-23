import { useMsal } from "@azure/msal-react";
import { LoginRequest } from "./msal";

const Login = () => {
  const { instance, inProgress } = useMsal();
  console.log("rendering Login", inProgress);

  const onClick = () => {
    instance.loginRedirect(LoginRequest);
  };

  return (
    <div className="login">
      <p>You are not authenticated!</p>
      <button onClick={onClick}>Login</button>
    </div>
  );
};
// #endregion

export default Login;
