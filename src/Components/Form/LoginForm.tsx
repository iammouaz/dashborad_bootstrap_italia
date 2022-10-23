import { loginSchema } from "Configs/formsSchemas";
import { ErrorMessage, Form, Formik } from "formik";
import { useLogin } from "Hooks/Queries/User/UseLogin";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginAttemp } from "Recoil/Atoms";

interface LoginFormProps {}

const LoginForm: React.FunctionComponent<LoginFormProps> = () => {
  const { mutate, isLoading, isError } = useLogin();
  const [, setLoginAttemp] = useRecoilState(loginAttemp);

  return (
    <Formik
      initialValues={{
        email: "admin@montedelgallo.com",
        password: "admin",
      }}
      onSubmit={(data) => {
        setLoginAttemp(data);
        mutate(data);
      }}
      validationSchema={loginSchema}
    >
      {({ handleChange, handleSubmit, values }) => {
        return (
          <Form
            onSubmit={handleSubmit}
            className="col-7 shadow-lg p-3 mb-5 bg-white rounded"
          >
            <div className="form-group col text-center">
              <img alt="Logo" src="../assets/img/mdg_gallo_150.png" />
            </div>

            <div className="form-group m-4">
              <input
                type="email"
                id="email"
                className="form-control"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
              <label className="form-label" htmlFor="email">
                Email address
              </label>
              <ErrorMessage
                className="text-danger"
                name="email"
                component="div"
              />
            </div>

            <div className="form-group m-4">
              <input
                type="password"
                id="password"
                className="form-control"
                name="password"
                onChange={handleChange}
                value={values.password}
              />
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <ErrorMessage
                className="text-danger"
                name="password"
                component="div"
              />
            </div>
            {isError && (
              <span className="text-danger">Please check your credentials</span>
            )}
            <div className="form-group col text-center">
              {isLoading ? (
                <div className="spinner-grow text-success" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                <button type="submit" className="btn btn-outline-primary">
                  Sign in
                </button>
              )}
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
