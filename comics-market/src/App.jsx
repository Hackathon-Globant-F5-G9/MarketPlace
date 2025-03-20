import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card/Card'
import Button from './components/Button/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card></Card>
      
      <Button text="COMPRAR"></Button>
      <Button text="VENDER" buttonClass="orange"></Button>
      <Button text="AGREGAR AL CARRITO" buttonClass="black"></Button>
    </>
  )
}

export default App