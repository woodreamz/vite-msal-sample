import { useMsal } from "@azure/msal-react";
import { logout } from "./msal";

const AuthenticatedApp = () => {
  const { instance, inProgress } = useMsal();

  console.log("rendering authenticated app");
  const onClick = () => {
    logout();
  };

  return (
    <div className="authenticated">
      <p>You are authenticated!</p>
      <p>Progress: {inProgress}</p>
      <p>Account: {instance.getActiveAccount()?.username}</p>
      <button onClick={onClick}>Logout</button>
    </div>
  );
};
// #endregion

export default AuthenticatedApp;
