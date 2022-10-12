import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email("Invalid email address").required("Email Required"),
  password: yup.string().required("Password Required"),
});

export const registerSchema = yup.object({
  id: yup.number(),
  email: yup.string().email("Invalid email address").required("Email Required"),
  user: yup.string().required("User Name Required"),
  password: yup
    .string()
    .min(6, "should be at least 6 character(s)")
    .required("Password Required"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password Confirmation Required"),
  token: yup.string(),
});
