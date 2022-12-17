import "./App.css";
import {
  Box,
  Button,
  ChakraProvider,
  color,
  Input,
  Text,
} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { theme } from "./styles/theme/base";
import Routes from "./routes";
import { RecoilRoot } from "recoil";
import { GoogleOAuthProvider } from "@react-oauth/google";
import secrets from "./secrets.json";
import { useState } from "react";
import { useCookies } from "react-cookie";

const newTheme = extendTheme(theme);

function App() {
  const [openSite, setOpenSite] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const [cookies, setCookie] = useCookies(["site-password"]);
  console.log(cookies);
  return (
    <ChakraProvider theme={newTheme}>
      <GoogleOAuthProvider clientId={secrets.GoogleClientId}>
        <RecoilRoot>
          {openSite || (cookies && cookies["site-password"]) ? (
            <Routes />
          ) : (
            <Box
              h="100vh"
              bg="white.100"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box w="100%" maxW="350px">
                <Text color="black.100" className="gordita400" mb={10}>
                  Password
                </Text>
                <Input
                  className="gordita400"
                  _placeholder={{
                    fontSize: 14,
                    color: "black.100",
                    opacity: 0.7,
                  }}
                  placeholder="Site Password"
                  w="100%"
                  border="1px solid"
                  borderColor="black.200"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  color="black.100"
                  type="password"
                />
                {error && password !== secrets.sitePassword && (
                  <Text color="red" className="gordita400" mb={10}>
                    Incorrect Password
                  </Text>
                )}
                <Box mt={12}>
                  <Button
                    _focus={{
                      bg: "primary.100",
                    }}
                    _hover={{
                      bg: "primary.100",
                    }}
                    className="gordita400"
                    p={0}
                    bg="primary.100"
                    w="100%"
                    onClick={() => {
                      if (password === secrets.sitePassword) {
                        setOpenSite(true);
                        setCookie("site-password", password, {
                          path: "/",
                        });
                      } else {
                        setError(true);
                      }
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </Box>
          )}
        </RecoilRoot>
      </GoogleOAuthProvider>
    </ChakraProvider>
  );
}

export default App;
