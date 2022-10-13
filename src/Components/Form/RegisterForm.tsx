import { useRecoilState } from "recoil";
import { loginData } from "Recoil/Atoms";
import { ErrorMessage, Form, Formik } from "formik";
import { registerSchema } from "Configs/formsSchemas";
import { v4 as uuidv4 } from "uuid";
import { useRegister } from "Hooks/Queries/User/useRegister";
import { Link } from "react-router-dom";

interface RegisterFormProps {}

const RegisterForm: React.FunctionComponent<RegisterFormProps> = () => {
  const [loginD, setLogin] = useRecoilState(loginData);
  const { mutate, isLoading } = useRegister();

  
  return (
    <Formik
      initialValues={{
        id: Math.floor(Math.random() * 100),
        user: "",
        password: "",
        password_confirmation: "",
        email: "",
        token: uuidv4(),
      }}
      onSubmit={(data) => {
        setLogin([...loginD, data]);
        mutate();
      }}
      validationSchema={registerSchema}
    >
      {({ handleChange, handleSubmit, values }) => {
        return (
          <Form
            className="col-7 shadow-lg p-3 mb-5 bg-white rounded"
            onSubmit={handleSubmit}
          >
            <div className="form-group col text-center">
              <img alt="Logo" src="../assets/img/mdg_gallo_150.png" />
            </div>
            <div className="row m-4">
              <div className="form-group mb-4 col-md-6">
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
              <div className="form-group mb-4 col-md-6">
                <input
                  type="text"
                  id="user"
                  className="form-control"
                  name="user"
                  onChange={handleChange}
                  value={values.user}
                />
                <label className="form-label" htmlFor="user">
                  User Name
                </label>
                <ErrorMessage
                  className="text-danger"
                  name="user"
                  component="div"
                />
              </div>
            </div>
            <div className="row m-4">
              <div className="form-group mb-4 col-md-6">
                <input
                  type="password"
                  data-bs-input
                  className="form-control input-password input-password-strength-meter"
                  id="password"
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

              <div className="form-group mb-4 col-md-6">
                <input
                  type="password"
                  id="password_confirmation"
                  className="form-control"
                  name="password_confirmation"
                  onChange={handleChange}
                  value={values.password_confirmation}
                />
                <label className="form-label" htmlFor="password_confirmation">
                  Confirm Password
                </label>
                <ErrorMessage
                  className="text-danger"
                  name="password_confirmation"
                  component="div"
                />
              </div>
            </div>

            <div className="form-group col text-center">
              {isLoading ? (
                <div className="spinner-grow text-success" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                <button type="submit" className="btn btn-outline-primary">
                  Register
                </button>
              )}
            </div>

            <div className="text-center">
              <p>
                Already a member <Link to="/login">Login</Link>
              </p>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
