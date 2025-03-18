import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react'
import NavBar from "./components/NavBar/NavBar.jsx";
import './App.css'
function App() {
  

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          {/* <Route path="/Sobrenosotros" element={<Sobrenosotros />} />
          <Route path="/Adopta" element={<><Adopta /><CatsSlider /></>} />
          <Route path="/Contacto" element={<AdoptForm />} />
          <Route path="/construction" element={<PageInConstruction />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
