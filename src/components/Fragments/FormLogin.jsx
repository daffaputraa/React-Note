import { Form, ButtonPrimary } from "../index";

const FormLogin = () => {
  return (
    <div className="container">
      <Form placeholder="Username" type="Halo" title="Username" />
      <Form placeholder="Password" type="password" title="Password" />
    </div>
  );
};

export default FormLogin;
