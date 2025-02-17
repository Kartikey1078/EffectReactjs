import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterEffect from './Components/CounterEffect'
import ApiuseEffect from './Components/ApiuseEffect'
import Size from './Components/Size'
import Todo from './Components/Todo'
function App() {
  useEffect(() => {
    document.body.style.minHeight = '100%';
}, []);

  return (
    <>
    <h3 style={{color:'white'}}>Mini project to understand useEffect</h3>
      <CounterEffect></CounterEffect>
      <ApiuseEffect></ApiuseEffect>
      <Size></Size>
      <Todo></Todo>
    </>
  )
}

export default App
