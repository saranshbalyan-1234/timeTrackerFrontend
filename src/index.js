import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "antd/dist/antd.css";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import "./index.css";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Routess from "./Components/Routess";
import axios from "axios";
import { api_base_url } from "./Utils/constants";

axios.defaults.baseURL = api_base_url;

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

render(
  <BrowserRouter>
    <Routes>
      <Route exact path="login" element={<Login />} />
      <Route exact path="register" element={<Register />} />
      <Route path="/*" element={<Routess />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
