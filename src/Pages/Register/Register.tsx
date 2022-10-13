import RegisterForm from "Components/Form/RegisterForm";

interface RegisterProps {}

const Register: React.FunctionComponent<RegisterProps> = () => {
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
        <RegisterForm />
      </div>
    </>
  );
};

export default Register;
