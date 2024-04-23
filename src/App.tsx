import "./App.css";
import Login from "./Login";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import AuthenticatedApp from "./AuthenticatedApp";

function App() {
  return (
    <>
      <h1>Vite + React + MSAL</h1>
      <AuthenticatedTemplate>
        <AuthenticatedApp />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Login />
      </UnauthenticatedTemplate>
    </>
  );
}

export default App;
