import React from "react";
import Dashboard from "../Dashboard";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
export default function Home() {
  return (
    <Dashboard>
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
      </Routes>
    </Dashboard>
  );
}
