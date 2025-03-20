import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card/Card'
import Button from './components/Button/Button'
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import PrivatePolicy from "./components/PrivatePolicy/PrivatePolicy";
import Contact from "./components/Contact/Contact";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Card></Card>
      
      <Button text="COMPRAR"></Button>
      <Button text="VENDER" buttonClass="orange"></Button>
      <Button text="AGREGAR AL CARRITO" buttonClass="black"></Button>
      <Router>
            <div>
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/private-policy" element={<PrivatePolicy />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    </>


  )
}

export default App;