import { createContext, useState, useEffect } from "react";

const AuthContex = createContext();

export default AuthContex;

export const AuthProvider = ({ children }) => {
  return (
    <AuthContex.Provider value={{ name: "Sohan" }}>
      {children}
    </AuthContex.Provider>
  );
};
