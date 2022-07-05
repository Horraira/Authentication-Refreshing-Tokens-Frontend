import React, { useContext } from "react";
import AuthContex from "../context/AuthContex";

const LoginPage = () => {
  let { loginUser } = useContext(AuthContex);
  return (
    <div>
      <form onSubmit={loginUser}>
        <input type="text" name="username" placeholder="Enter Username"></input>{" "}
        <br></br>
        <br></br>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
        ></input>
        <br></br>
        <br></br>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default LoginPage;
