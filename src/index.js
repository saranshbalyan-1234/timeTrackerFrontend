import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Dashboard from "./Components/Dashboard/Dashboard";

render(
  <BrowserRouter>
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="/" element={<Dashboard />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
