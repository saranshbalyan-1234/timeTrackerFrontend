import React from "react";
import Dashboard from "../Dashboard";
import { Routes, Route } from "react-router-dom";
import Home from "./Main";

export default function Main() {
  return (
    <Dashboard>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </Dashboard>
  );
}
