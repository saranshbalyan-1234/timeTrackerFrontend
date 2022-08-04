import React from "react";
import Dashboard from "../Dashboard";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { message } from "antd";
import Home from "./Home";
import axios from "axios";
export default function Routess() {
  axios.interceptors.request.use((request) => {
    request.headers.Authorization = `Bearer ${localStorage.getItem(
      "accessToken"
    )}`;

    return request;
  });
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (err) => {
      console.log("errorResponse", err.response);
      if (err.response.data.message == "Unauthenticated.") {
        localStorage.clear();
        // navigate("/login");
        message.error("Please Login Again, Token Expired");
        return err.response;
      }
    }
  );
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
