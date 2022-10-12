import RegisterForm from "Components/Form/RegisterForm";

interface RegisterProps {}

const Register: React.FunctionComponent<RegisterProps> = () => {
  return (
    <>
      <div className="container d-flex justify-content-center algin-items-center py-5">
        <RegisterForm />
      </div>
    </>
  );
};

export default Register;
