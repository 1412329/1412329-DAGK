import React from "react";

const Login = props => (
    <div className="login">
      <p>Click button below to sign in!</p>
      <button className="gmail" onClick={() => props.authenticate("Google")}>Log In With Gmail</button>
    </div>
  );

  export default Login;