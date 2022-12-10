import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { theme } from "./styles/theme/base";
import Routes from "./routes";
import { RecoilRoot } from "recoil";
import { GoogleOAuthProvider } from "@react-oauth/google";
import secrets from "./secrets.json";
const newTheme = extendTheme(theme);

function App() {

  return (
    <ChakraProvider theme={newTheme}>
      <GoogleOAuthProvider clientId={secrets.GoogleClientId}>
        <RecoilRoot>
          <Routes />
        </RecoilRoot>
      </GoogleOAuthProvider>
    </ChakraProvider>
  );
}

export default App;
