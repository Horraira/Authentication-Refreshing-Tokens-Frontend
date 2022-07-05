import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContex from "../context/AuthContex";

const Header = () => {
  let { user } = useContext(AuthContex);
  return (
    <div>
      <Link to="/">Home</Link>
      <span> | </span>
      {user ? <p>Logout</p> : <Link to="/login">Login</Link>}

      {user && <p>Hello {user.username}</p>}
    </div>
  );
};

export default Header;
