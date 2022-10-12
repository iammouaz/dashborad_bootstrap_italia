interface LoginFormProps {}

const LoginForm: React.FunctionComponent<LoginFormProps> = () => {

    
  return (
    <form className="col-7 shadow-lg p-3 mb-5 bg-white rounded">
      <div className="form-group mb-4">
        <input type="email" id="email" className="form-control" />
        <label className="form-label" htmlFor="email">
          Email address
        </label>
      </div>

      <div className="form-group mb-4">
        <input type="password" id="password" className="form-control" />
        <label className="form-label" htmlFor="password">
          Password
        </label>
      </div>

      <button type="button" className="btn btn-outline-primary">
        Sign in
      </button>

      <div className="text-center">
        <p>
          Not a member? <a href="register">Register</a>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
