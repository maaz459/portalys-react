import { Box, Button, Divider, HStack, Text, VStack, Input, chakra, useToast, Image } from "@chakra-ui/react";
import { LoginSchema } from "../../../utils/schema";
import { Formik, Field, Form } from "formik";
import { google } from "../../../static/assets/images";
import { RegistraionModalTypes, registration } from "../../../recoil/atoms/registration";
import { user } from "../../../recoil/atoms/user";
import { useRecoilState } from "recoil";
import { fetchUser, loginWithGoogle } from "../../../utils/actions/registration";
import { Navigate, useNavigate } from "react-router-dom";
import { userRoles } from "../../../utils/constants";
import { useGoogleLogin } from "@react-oauth/google";
import { useCookies } from "react-cookie";
import { saveToken } from "../../../utils/handleTokens";
const initialValues = { email: "", password: "" };
const Login = () => {
  const [_, setRegistrationModal] = useRecoilState(registration);
  const [u, setUser] = useRecoilState(user);
  const toast = useToast();
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["x-auth-token"]);

  const userRole = window.location.pathname.includes("organizer") ? userRoles.ORGANIZER : userRoles.ATTENDEE;

  const handleGoogleLogin = async (payload) => {
    const user = await loginWithGoogle({ ...payload, userRole });
    saveToken(user.token, "x-auth-token", 60, setCookie);
    localStorage.setItem("user_d", JSON.stringify(user.user));
    localStorage.setItem("x-auth-token", user.token);

    setUser((lp) => {
      return {
        ...lp,
        token: user.token,
        userData: user.user,
      };
    });
    setRegistrationModal((lp) => {
      return {
        ...lp,
        openModal: false,
        modalType: "",
        userData: {},
        userRole: "",
      };
    });
  };

  const login = useGoogleLogin({
    onSuccess: (res) => handleGoogleLogin(res),
    onError: (err) => console.log(err),
    prompt: "select_account",
  });

  const handleLogin = async (values) => {
    const getUser = await fetchUser({ ...values, userRole });
    if (!getUser.success) {
      toast({
        title: "Login Error",
        description: getUser.message,
        status: "error",
        isClosable: true,
        duration: 4000,
        position: "top-right",
      });
    } else {
      localStorage.setItem("user_d", JSON.stringify(getUser.user));
      localStorage.setItem("x-auth-token", getUser.token);

      setUser((lp) => {
        return {
          ...lp,
          token: getUser.token,
          userData: getUser.user,
        };
      });
      setRegistrationModal((lp) => {
        return {
          ...lp,
          openModal: false,
          modalType: "",
          userData: {},
          userRole: "",
        };
      });
    }
  };

  const handleTorusLogin = async () => {};

  return (
    <Box w="100%">
      <VStack>
        <Text className="gordita700" fontSize={{ base: 18, md: 24 }}>
          Sign in to Portalys
        </Text>
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={async (values) => {
            await handleLogin(values);
          }}
        >
          {(formik) => {
            const { handleSubmit, errors, touched } = formik;
            return (
              <Form onSubmit={handleSubmit} style={{ width: "100%" }}>
                <VStack px={{ base: 0, md: 36 }} alignItems="flex-start">
                  <Text className="heebo" fontWeight={600} fontSize={14}>
                    Email
                  </Text>
                  <Field
                    type="string"
                    name="email"
                    id="email"
                    render={({ field }) => (
                      <Input
                        placeholder="Enter Your Email"
                        fontSize={14}
                        {...field}
                        border="1px solid"
                        borderColor="rgba(0,0,0,0.3)"
                        type="text"
                        color="black.100"
                        _placeholder={{
                          color: "black.100",
                        }}
                        h="48px"
                      />
                    )}
                  />
                  {errors.email && touched.email && (
                    <Text color="red" className="heebo" fontWeight={400} fontSize={14}>
                      {errors.email}
                    </Text>
                  )}
                </VStack>
                <VStack mt={16} px={{ base: 0, md: 36 }} alignItems="flex-start">
                  <Text className="heebo" fontWeight={600} fontSize={14}>
                    Password{" "}
                  </Text>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    render={({ field }) => (
                      <Input
                        placeholder="Enter Your Password"
                        fontSize={14}
                        {...field}
                        border="1px solid"
                        borderColor="rgba(0,0,0,0.3)"
                        type="password"
                        color="black.100"
                        _placeholder={{
                          color: "black.100",
                        }}
                        h="48px"
                      />
                    )}
                  />
                  {errors.password && touched.password && (
                    <Text color="red" className="heebo" fontWeight={400} fontSize={14}>
                      {errors.password}
                    </Text>
                  )}
                </VStack>
                <Box px={{ base: 0, md: 36 }} mt={24} w="100%">
                  <Button
                    color="white.100"
                    bg="primary.100"
                    type="submit"
                    className="gordita700"
                    w="100%"
                    borderRadius="48px"
                    h="65px"
                    _focus={{
                      color: "white.100",
                      bg: "primary.100",
                      borderRadius: "48px",
                    }}
                    _active={{
                      color: "white.100",
                      bg: "primary.100",
                      borderRadius: "48px",
                    }}
                  >
                    Continue with Email
                  </Button>
                  <Text
                    cursor="pointer"
                    onClick={() => {
                      setRegistrationModal((lp) => {
                        return {
                          ...lp,
                          openModal: true,
                          modalType: RegistraionModalTypes.FORGOT,
                          userData: {},
                        };
                      });
                    }}
                    mt={24}
                    color="#FF5C00"
                  >
                    Forgot password?
                  </Text>
                </Box>
                <Box>
                  <HStack my={36} px={{ base: 0, md: 36 }}>
                    <Divider
                      orientation="horizontal"
                      bg="#A2A2A6
"
                      w="100%"
                    />
                    <Text className="poppins600" fontWeight={500} fontSize={16}>
                      or
                    </Text>
                    <Divider
                      orientation="horizontal"
                      bg="#A2A2A6
"
                      w="100%"
                    />
                  </HStack>
                </Box>
                <Box px={{ base: 0, md: 36 }} mt={24} w="100%">
                  <Button
                    type="button"
                    className="gordita700"
                    w="100%"
                    borderRadius="48px"
                    h="65px"
                    borderColor="primary.100"
                    border="1px solid"
                    onClick={() => login()}
                  >
                    <Image alt="" src={google} style={{ marginRight: "10px" }} /> Sign in with Google
                  </Button>
                </Box>
                <Box px={{ base: 0, md: 36 }} mt={24} w="100%">
                  <Button
                    type="button"
                    color="white.100"
                    bg="blue.100"
                    className="gordita700"
                    w="100%"
                    borderRadius="48px"
                    h="65px"
                    onClick={() => handleTorusLogin()}
                  >
                    Sign in with TORUS{" "}
                  </Button>
                </Box>
                <Box className="gordita400" fontSize={16} px={{ base: 0, md: 36 }} mt={24} w="100%" pb={56}>
                  Don't have an account?
                  <chakra.span
                    color="orange.100"
                    cursor="pointer"
                    onClick={() =>
                      setRegistrationModal((lp) => {
                        return {
                          ...lp,
                          openModal: true,
                          modalType: RegistraionModalTypes.SIGNUP,
                        };
                      })
                    }
                  >
                    {" "}
                    Sign Up
                  </chakra.span>
                </Box>
              </Form>
            );
          }}
        </Formik>
      </VStack>
    </Box>
  );
};

export default Login;
