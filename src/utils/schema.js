import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Email address should be valid")
    .required("Email is required"),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Email address should be valid")
    .required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Least 8 characteres"),
});

export const forgotSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Email address should be valid")
    .required("Email is required"),
});

export const PasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(8, "Least 8 characteres"),
  // .matches(/[a-z]/, { message: "Lowecase (a-z) and uppercase (A-Z)" })
  // .matches(/[A-Z]/, { message: "Lowecase (a-z) and uppercase (A-Z)" })
  // .matches(/[0-9]/, {
  //   message: "Least one number (0-9) or character special",
  // })
  // .matches(/[^\w]/, {
  //   message: "Least one number (0-9) or character special",
  // })
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
