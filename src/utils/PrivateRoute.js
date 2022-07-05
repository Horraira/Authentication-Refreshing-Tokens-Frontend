import React from "react";
import { Router, Routes, Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const auth = false;
  return auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
