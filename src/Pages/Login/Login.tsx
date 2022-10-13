import LoginForm from "Components/Form/LoginForm";

interface LoginProps {}

const Login: React.FunctionComponent<LoginProps> = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(../assets/img/14.png)",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
