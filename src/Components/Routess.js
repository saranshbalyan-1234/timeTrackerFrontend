import React from "react";
import Dashboard from "../Dashboard";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./Home";

export default function Routess() {
  const user = JSON.parse(localStorage.getItem("user")).id;
  const location = useLocation();
  return true ? (
    <Dashboard>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </Dashboard>
  ) : (
    <Navigate
      to={{
        pathname: "/login",
        state: {
          from: location.pathname,
        },
      }}
    />
  );
}
