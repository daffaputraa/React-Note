import React from "react";

const AuthLayouts = ({ children, title }) => {
  return (
    <div>
      <h1>Halo silakan {title}</h1>
      {children}
    </div>
  );
};

export default AuthLayouts;
