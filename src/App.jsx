import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from "./Counter.jsx";
import Display from "./Display.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Hello World!</h1>
        <Counter />
      <Display />
    </div>
  )
}

export default App
