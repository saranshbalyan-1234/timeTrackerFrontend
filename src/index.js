import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Home from "./Components";

render(
  <BrowserRouter>
    <Routes>
      <Route exact path="login" element={<Login />} />
      <Route exact path="register" element={<Register />} />
      <Route path="/*" element={<Home />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
