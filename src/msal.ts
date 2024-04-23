import {
  AuthenticationResult,
  BrowserCacheLocation,
  Configuration,
  EventType,
  PublicClientApplication,
  RedirectRequest,
} from "@azure/msal-browser";

const MSAL_SCOPES = [
  "openid",
  "profile",
  "offline_access",
  "api://distech-ewt-services-dev/facilities.access",
];

const msalConfig: Configuration = {
  auth: {
    clientId: "5a96f20c-5761-49b3-9aa5-3e58123196e8",
    authority:
      "https://login.microsoftonline.com/caadbe96-024e-4f67-82ec-fb28ff53d16d",
  },
  cache: {
    cacheLocation: BrowserCacheLocation.LocalStorage,
  },
};

const LoginRequest: RedirectRequest = {
  scopes: MSAL_SCOPES,
  redirectUri: "/",
};

const msalInstance = new PublicClientApplication(msalConfig);

msalInstance.addEventCallback((message) => {
  if (message.eventType === EventType.LOGIN_SUCCESS) {
    const payload = message.payload as AuthenticationResult;
    msalInstance.setActiveAccount(payload.account);
  }
});

const logout = () => {
  msalInstance.logoutRedirect({
    onRedirectNavigate: () => {
      return false;
    },
  });
};

export { msalConfig, LoginRequest, msalInstance, logout };
