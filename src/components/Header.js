import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContex from "../context/AuthContex";

const Header = () => {
  let { name } = useContext(AuthContex);
  return (
    <div>
      <Link to="/">Home</Link>
      <span> | </span>
      <Link to="/login">Login</Link>
      <p>Hello {name}</p>
    </div>
  );
};

export default Header;
