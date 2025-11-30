import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Agence from "../pages/Agence";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
      </Routes>
    </div>
  );
};

export default Router;
