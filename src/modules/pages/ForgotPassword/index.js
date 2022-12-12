import {
  Box,
  Button,
  Divider,
  HStack,
  Text,
  VStack,
  Input,
  chakra,
  useToast,
  Image,
} from "@chakra-ui/react";
import { forgotSchema, LoginSchema } from "../../../utils/schema";
import { Formik, Field, Form } from "formik";
import { google } from "../../../static/assets/images";
import {
  RegistraionModalTypes,
  registration,
} from "../../../recoil/atoms/registration";
import { user } from "../../../recoil/atoms/user";
import { useRecoilState } from "recoil";
import {
  fetchUser,
  loginWithGoogle,
  sendForgotEmail,
} from "../../../utils/actions/registration";
import { Navigate, useNavigate } from "react-router-dom";
import { userRoles } from "../../../utils/constants";
import { useGoogleLogin } from "@react-oauth/google";
import { useCookies } from "react-cookie";
import { saveToken } from "../../../utils/handleTokens";
const initialValues = { email: "" };
const ForgotPassword = () => {
  const [_, setRegistrationModal] = useRecoilState(registration);
  const [u, setUser] = useRecoilState(user);
  const toast = useToast();
  const navigate = useNavigate();

  const userRole = window.location.pathname.includes("organizer")
    ? userRoles.ORGANIZER
    : userRoles.ATTENDEE;

  const handleForgotPassword = async (values) => {
    const forgot = await sendForgotEmail(values);
    if (!forgot.success) {
      toast({
        title: "Forgot Email Error",
        description: forgot.message,
        status: "error",
        isClosable: true,
        duration: 4000,
        position: "top-right",
      });
    } else {
      setRegistrationModal((lp) => {
        return {
          ...lp,
          openModal: false,
          modalType: "",
          userData: {},
          userRole: "",
        };
      });
      toast({
        title: "Forgot Email Sent",
        status: "success",
        isClosable: true,
        duration: 4000,
        position: "top-right",
      });
    }
  };

  return (
    <Box w="100%">
      <VStack>
        <Text className="gordita700" fontSize={{ base: 18, md: 24 }}>
          Forget Password{" "}
        </Text>
        <Formik
          initialValues={initialValues}
          validationSchema={forgotSchema}
          onSubmit={async (values) => {
            await handleForgotPassword(values);
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
                    <Text
                      color="red"
                      className="heebo"
                      fontWeight={400}
                      fontSize={14}
                    >
                      {errors.email}
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
                    Send{" "}
                  </Button>
                </Box>

                <Box
                  className="gordita400"
                  fontSize={16}
                  px={{ base: 0, md: 36 }}
                  mt={24}
                  w="100%"
                  pb={56}
                  textAlign="center"
                >
                  Have an account already?
                  <chakra.span
                    color="orange.100"
                    cursor="pointer"
                    onClick={() =>
                      setRegistrationModal((lp) => {
                        return {
                          ...lp,
                          openModal: true,
                          modalType: RegistraionModalTypes.LOGIN,
                          userData: {},
                        };
                      })
                    }
                  >
                    {" "}
                    Log in
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

export default ForgotPassword;
