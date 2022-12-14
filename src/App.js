import "./App.css";
import { Box, Button, ChakraProvider, color, Input, Text } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { theme } from "./styles/theme/base";
import Routes from "./routes";
import { GoogleOAuthProvider } from "@react-oauth/google";
import secrets from "./secrets.json";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Web3Auth } from "@web3auth/modal";
import { SolanaWallet } from "@web3auth/solana-provider";
import { SolanaWalletAdapter } from "@web3auth/torus-solana-adapter";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import RPC from "./solanaRPC.ts";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { useRecoilState } from "recoil";
// Plugins
import { SolanaWalletConnectorPlugin } from "@web3auth/solana-wallet-connector-plugin";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Adapters
import { SolflareAdapter } from "@web3auth/solflare-adapter";
import { SlopeAdapter } from "@web3auth/slope-adapter";
import { fetchUserData } from "./utils/actions/registration";
import { user } from "./recoil/atoms/user";
import { useColorMode } from "@chakra-ui/react";
const newTheme = extendTheme(theme);

const clientId = "BBhbmSbaMcjyqJ864MsQXmmVudb_g5godU5Ml_GWpCFUfGdxb40_TBmgUz79J82HiSJ2dmhDoChOVEAOs6kX73I";
// const clientId = "BCXfOhyKcaMjuPu5i5UzNe27T4QSoJikT0mXifLzEe8gMnp0JBW0VhmRLc2jQ7jg7Si0zq7GfThrA89QrPa7HSE";

function App() {
  const [openSite, setOpenSite] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [web3auth, setWeb3auth] = useState(null);
  const [provider, setProvider] = useState(null);
  const [cookies, setCookie] = useCookies(["site-password"]);
  const [_, setUser] = useRecoilState(user);
  const { colorMode } = useColorMode();
  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = new Web3Auth({
          clientId,
          uiConfig: { modalZIndex: 10000000 },
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.SOLANA,
            chainId: "0x1", // Please use 0x1 for Mainnet, 0x2 for Testnet, 0x3 for Devnet
            rpcTarget: "https://api.devnet.solana.com",
            // rpcTarget:
            //   "https://soft-necessary-patron.solana-devnet.discover.quiknode.pro/f68f102b8757e8c3b1d5161b9ec052bc8bbf123a/", // This is the public RPC we have added, please pass on your own endpoint while creating an app
          },
        });

        // const openloginAdapter = new OpenloginAdapter({
        //   adapterSettings: {
        //     network: "development",
        //     clientId,
        //     uxMode: "redirect",
        //   },
        // });
        // web3auth.configureAdapter(openloginAdapter);

        // adding solana wallet connector plugin

        const torusPlugin = new SolanaWalletConnectorPlugin({
          // torusWalletOpts: { modalZIndex: 10000000 },
          walletInitOptions: {
            whiteLabel: {
              name: "Whitelabel Demo",
              theme: { isDark: false, colors: { torusBrand1: "#00a8ff" } },
              logoDark: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
              logoLight: "https://web3auth.io/images/w3a-D-Favicon-1.svg",
              topupHide: true,
              defaultLanguage: "en",
            },
            network: "devnet",
          },
        });
        await web3auth.addPlugin(torusPlugin);

        const solflareAdapter = new SolflareAdapter({
          clientId,
        });
        web3auth.configureAdapter(solflareAdapter);

        const slopeAdapter = new SlopeAdapter({
          clientId,
        });
        web3auth.configureAdapter(slopeAdapter);

        setWeb3auth(web3auth);
        await web3auth.initModal();
        if (web3auth.provider) {
          setProvider(web3auth.provider);
        }
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("x-auth-token");
    const getUser = async () => {
      if (token) {
        await fetchUserData(token)
          .then((user) => {
            setUser((lp) => {
              return {
                ...lp,
                token,
                userData: { ...user },
              };
            });
          })
          .catch((err) => {
            setUser((lp) => {
              return {
                ...lp,
                token: "",
                userData: null,
              };
            });
          });
      } else {
        setUser((lp) => {
          return {
            ...lp,
            token: "",
            userData: null,
          };
        });
      }
    };
    getUser();
  }, []);

  const login = async () => {
    if (!web3auth) {
      return "web3auth not initialized yet";
    }
    const web3authProvider = await web3auth.connect();
    setProvider(web3authProvider);
    return "Logged in Successfully!";
  };

  const authenticateUser = async () => {
    if (!web3auth) {
      return "web3auth not logged in";
    }
    const idToken = await web3auth.authenticateUser();
    return idToken;
  };

  const getUserInfo = async () => {
    if (!web3auth) {
      return "web3auth not initialized yet";
    }
    const user = await web3auth.getUserInfo();
    return user;
  };

  const logout = async () => {
    if (!web3auth) {
      return "web3auth not initialized yet";
    }
    await web3auth.logout();
    setProvider(null);
    return null;
  };

  const getAccounts = async () => {
    if (!provider) {
      return "provider not initialized yet";
    }
    const rpc = new RPC(provider);
    const address = await rpc.getAccounts();
    return address;
  };

  const getBalance = async () => {
    if (!provider) {
      return "provider not initialized yet";
    }
    const rpc = new RPC(provider);
    const balance = await rpc.getBalance();
    return balance;
  };

  const sendTransaction = async () => {
    if (!provider) {
      return "provider not initialized yet";
    }
    const rpc = new RPC(provider);
    const receipt = await rpc.sendTransaction();
    return receipt;
  };

  const signMessage = async () => {
    if (!provider) {
      return "provider not initialized yet";
    }
    const rpc = new RPC(provider);
    const signedMessage = await rpc.signMessage();
    return signedMessage;
  };

  const getPrivateKey = async () => {
    if (!provider) {
      return "provider not initialized yet";
    }
    const rpc = new RPC(provider);
    const privateKey = await rpc.getPrivateKey();
    return privateKey;
  };

  const paySolFee = async (receiverWallet, lamports) => {
    if (!provider) {
      return "provider not initialized yet";
    }
    const rpc = new RPC(provider);
    const receipt = await rpc.paySolFee(receiverWallet, lamports);
    return receipt;
  };

  return (
    <ChakraProvider portalZIndex={40} theme={newTheme}>
      <GoogleOAuthProvider clientId={secrets.GoogleClientId}>
        {openSite || (cookies && cookies["site-password"]) ? (
          <React.StrictMode>
            <Routes
              {...{
                authenticateUser,
                getUserInfo,
                logout,
                getAccounts,
                getBalance,
                sendTransaction,
                signMessage,
                getPrivateKey,
                login,
                web3auth,
                provider,
                paySolFee,
              }}
            />
          </React.StrictMode>
        ) : (
          <Box h="100vh" bg="white.100" display="flex" alignItems="center" justifyContent="center">
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
      </GoogleOAuthProvider>
    </ChakraProvider>
  );
}

export default App;
