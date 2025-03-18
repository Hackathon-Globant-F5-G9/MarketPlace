import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react'
import NavBar from "./components/NavBar/NavBar.jsx";
import './App.css'
import Card from './components/Card/Card'
import Button from './components/Button/Button'

function App() {
  

  return (
    <>
      <Card></Card>
      
      <Button text="COMPRAR"></Button>
      <Button text="VENDER" forma="orange"></Button>
      <Button text="AGREGAR AL CARRITO" forma="orange"></Button>
    </>
  )
}

export default App