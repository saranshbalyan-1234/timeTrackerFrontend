import React from "react";
import Dashboard from "../Dashboard";
import { Routes, Route } from "react-router-dom";
import Home from "./Main";
import Interceptor from "../Utils/Interceptor";
export default function Main() {
  return (
    <Interceptor>
      <Dashboard>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </Dashboard>
    </Interceptor>
  );
}
