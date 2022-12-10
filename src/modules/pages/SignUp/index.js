import {
  Box,
  Button,
  Divider,
  HStack,
  Text,
  VStack,
  Input,
  chakra,
  Image,
} from "@chakra-ui/react";
import { SignUpSchema } from "../../../utils/schema";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { google } from "../../../static/assets/images";
import {
  RegistraionModalTypes,
  registration,
} from "../../../recoil/atoms/registration";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { userRoles } from "../../../utils/constants";
const initialValues = { email: "", password: "", confirmPassword: "" };

const SignUp = () => {
  const [_, setRegistrationModal] = useRecoilState(registration);
  const navigate = useNavigate();
  const userRole = window.location.pathname.includes("organizer")
    ? userRoles.ORGANIZER
    : userRoles.ATTENDEE;

  return (
    <Box w="100%">
      <VStack>
        <Text className="gordita700" fontSize={{ base: 18, md: 24 }}>
          Sign up to Portalys
        </Text>
        <Formik
          initialValues={initialValues}
          validationSchema={SignUpSchema}
          onSubmit={(values) => {
            setRegistrationModal((lp) => {
              return {
                ...lp,
                openModal: true,
                modalType: RegistraionModalTypes.PASSWORD,
                userRole,
                userData: {
                  email: values.email,
                },
              };
            });
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
                    type="email"
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
                    Continue with Email
                  </Button>
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
                  >
                    <Image
                      alt=""
                      src={google}
                      style={{ marginRight: "10px" }}
                    />{" "}
                    Sign up with Google
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
                  >
                    Sign up with TORUS{" "}
                  </Button>
                </Box>
                <Box
                  className="gordita400"
                  fontSize={16}
                  px={{ base: 0, md: 36 }}
                  mt={24}
                  w="100%"
                  pb={56}
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

export default SignUp;
