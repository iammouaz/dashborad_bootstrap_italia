import LoginForm from "Components/Form/LoginForm";
import { useLogin } from "Hooks/Queries/User/UseLogin";

interface LoginProps {}

const Login: React.FunctionComponent<LoginProps> = () => {
  const { mutate, isLoading } = useLogin();

  return (
    <>
      <div className="container d-flex justify-content-center algin-items-center py-5">
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
