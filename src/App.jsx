import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards/Card'
import Grid from './components/Grid/Grid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Grid numberofcards={9}/>
    </>
  )
}

export default App
