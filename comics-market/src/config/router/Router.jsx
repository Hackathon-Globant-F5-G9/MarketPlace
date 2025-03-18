import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "../../pages/HomePage";
import "../../../src/index.css";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
