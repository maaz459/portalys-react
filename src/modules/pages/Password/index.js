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
import { PasswordSchema } from "../../../utils/schema";
import { Formik, Field, Form } from "formik";
import { google } from "../../../static/assets/images";
import {
  RegistraionModalTypes,
  registration,
} from "../../../recoil/atoms/registration";
import { useRecoilState } from "recoil";
import { addNewUser } from "../../../utils/actions/registration";
const initialValues = { password: "", confirmPassword: "" };
const ForgotPassword = () => {
  const [_, setRegistrationModal] = useRecoilState(registration);
  const toast = useToast();

  const handleSignup = async (values) => {
    const payload = {
      email: _.userData?.email,
      password: values.password,
      userRole: _.userRole,
    };
    const addUser = await addNewUser(payload);
    if (!addUser.success) {
      toast({
        title: "Account Creation",
        description: addUser.message,
        status: "error",
        isClosable: true,
        duration: 4000,
      });
    } else {
      toast({
        title: "Account Created Successfully",
        status: "success",
        isClosable: true,
        duration: 1500,
        position: "top-right",
      });
      setRegistrationModal((lp) => {
        return {
          ...lp,
          openModal: true,
          modalType: RegistraionModalTypes.LOGIN,
          userData: {},
        };
      });
    }
  };

  return (
    <Box w="100%">
      <VStack>
        <Text className="gordita700" fontSize={{ base: 18, md: 24 }}>
          Set your password{" "}
        </Text>
        <Formik
          initialValues={initialValues}
          validationSchema={PasswordSchema}
          onSubmit={async (values) => {
            await handleSignup(values);
          }}
        >
          {(formik) => {
            const { handleSubmit, errors, touched } = formik;
            return (
              <Form onSubmit={handleSubmit} style={{ width: "100%" }}>
                <VStack px={{ base: 0, md: 36 }} alignItems="flex-start">
                  <Text className="heebo" fontWeight={600} fontSize={14}>
                    Password
                  </Text>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    render={({ field }) => (
                      <Input
                        placeholder="Enter Password"
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
                  {errors.password && touched.password && (
                    <Text
                      color="red"
                      className="heebo"
                      fontWeight={400}
                      fontSize={14}
                    >
                      {errors.password}
                    </Text>
                  )}
                </VStack>
                <VStack
                  mt={36}
                  px={{ base: 0, md: 36 }}
                  alignItems="flex-start"
                >
                  <Text className="heebo" fontWeight={600} fontSize={14}>
                    Confirm Password{" "}
                  </Text>
                  <Field
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    render={({ field }) => (
                      <Input
                        placeholder="Enter Confirm Password"
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
                  {errors.confirmPassword && touched.confirmPassword && (
                    <Text
                      color="red"
                      className="heebo"
                      fontWeight={400}
                      fontSize={14}
                    >
                      {errors.confirmPassword}
                    </Text>
                  )}
                </VStack>
                <Box pb={56} px={{ base: 0, md: 36 }} mt={24} w="100%">
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
                    Set your password{" "}
                  </Button>
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
