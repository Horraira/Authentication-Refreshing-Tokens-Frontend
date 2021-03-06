import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const AuthContex = createContext();

export default AuthContex;

export const AuthProvider = ({ children }) => {
  let [authTokens, setAuthTokens] = useState(null);
  let [user, setUser] = useState(null);

  let loginUser = async (e) => {
    e.preventDefault();
    let response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    let data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
    } else {
      alert("Something went wrong!");
    }
  };

  let contextData = {
    loginUser: loginUser,
    user: user,
  };

  return (
    <AuthContex.Provider value={contextData}>{children}</AuthContex.Provider>
  );
};
