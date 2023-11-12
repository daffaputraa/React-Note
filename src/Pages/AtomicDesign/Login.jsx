import React from "react";
import { AuthLayouts, FormLogin } from "../../components";

const Login = () => {
  return (
    <>
      <AuthLayouts title="login">
        <FormLogin placeholder="login" />
      </AuthLayouts>
    </>
  );
};

export default Login;
