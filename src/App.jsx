import { useState } from 'react'

import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Header/>
    </BrowserRouter>
     
    </>
  )
}

export default App
