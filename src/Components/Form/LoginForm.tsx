import { loginSchema } from "Configs/formsSchemas";
import { Form, Formik } from "formik";
import { useLogin } from "Hooks/Queries/User/UseLogin";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginAttemp } from "Recoil/Atoms";

interface LoginFormProps {}

const LoginForm: React.FunctionComponent<LoginFormProps> = () => {
  const { mutate, isLoading } = useLogin();
  const [, setLoginAttemp] = useRecoilState(loginAttemp);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(data) => {
        setLoginAttemp(data)
        mutate(data)
      }}
      validationSchema={loginSchema}
    >
      {({ handleChange, handleSubmit, values }) => {
        return (
          <Form
            onSubmit={handleSubmit}
            className="col-7 shadow-lg p-3 mb-5 bg-white rounded"
          >
            <div className="form-group mb-4">
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
            </div>

            <div className="form-group mb-4">
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
            </div>

            {isLoading ? (
              <div className="spinner-grow text-success" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <button type="submit" className="btn btn-outline-primary">
                Sign in
              </button>
            )}

            <div className="text-center">
              <p>
                Not a member? <Link to="/register">Register</Link>
              </p>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
