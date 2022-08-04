import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/antd.min.css";
import "./index.css";
import Register from "./Auth/Register";
import Routess from "./Components/Routess";
import axios from "axios";
import { api_base_url } from "./Utils/constants";
import { Provider } from "react-redux";
import { store, persister } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import SignIn from "./Auth/SignIn";
import PasswordReset from "./Auth/PasswordReset";
axios.defaults.baseURL = api_base_url;

render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <Routes>
          <Route exact path="signin" element={<SignIn />} />
          <Route exact path="register" element={<Register />} />
          <Route exact path="password-reset" element={<PasswordReset />} />
          <Route path="/*" element={<Routess />} />
        </Routes>
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
