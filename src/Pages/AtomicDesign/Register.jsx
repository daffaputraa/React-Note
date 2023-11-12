import { AuthLayouts, FormLogin, Form } from "../../components";
const Register = () => {
  return (
    <>
      <AuthLayouts title="Register">
        <FormLogin
          placeholder="this"
          type={{ password: "password", email: "email" }}
        ></FormLogin>
      </AuthLayouts>
    </>
  );
};

export default Register;
