import React from "react";
import Dashboard from "../Dashboard";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { message } from "antd";
import Home from "./Home";
import axios from "axios";
import { connect } from "react-redux";
import { logout } from "../Redux/Actions/auth";
function Routess({ user }) {
  const navigate = useNavigate();

  axios.interceptors.request.use((request) => {
    request.headers.Authorization = `Bearer ${user?.accessToken}`;
    return request;
  });

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (err) => {
      let status = err.response.status;
      if (status == 401) {
        logout();
        return navigate("/signin");
      }

      let errors = err.response.data.errors;
      errors.forEach((error) => {
        message.error(error);
      });

      console.log("errorResponse", errors);
      return err.response;
    }
  );

  const location = useLocation();
  return user ? (
    <Dashboard>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </Dashboard>
  ) : (
    <Navigate
      to={{
        pathname: "/signin",
        state: {
          from: location.pathname,
        },
      }}
    />
  );
}
const mapStateToProps = (state) => ({ user: state.auth.user });

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Routess);
