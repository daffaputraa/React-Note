import { useState } from "react";

const Card = ({ isPacked }) => {
  if (isPacked) {
    return <h1>This is True!</h1>; //akan mengembalikan nilai ini jika propsnya true
  }
  return <h1>This is False!</h1>; // akan mengembalikan nilai ini jika propsnya false
};
// kalau mau detail banget pake yang ini

const Navigation = ({ auth }) => {
  if (auth) {
    return (
      <p>
        Dont't have account? <a href="">Sign Up!</a>
      </p>
    );
  } else {
    return (
      <p>
        Already have an account?<a href="">Login</a>
      </p>
    );
  }
};

const Conditional = () => {
  const [role, setRole] = useState(true);
  return (
    <>
      <form action="">
        <div className="input flex flex-col">
          <label htmlFor="">Username</label>
          <input type="text" className="bg-neutral-200" />
        </div>
        <div className="input flex flex-col">
          <label htmlFor="">Password</label>
          <input type="text" className="bg-neutral-200" />
        </div>
        <Navigation auth={role} />
        <button onClick={() => setRole(!role)}>Halo</button>
      </form>
    </>
  );
};

export default Conditional;
