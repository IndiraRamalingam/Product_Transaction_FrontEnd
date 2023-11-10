import React from 'react'
import './App.css'
import { AppProvider } from './components/AppContext'
import Card from './components/Card'
import Statistics from './components/Statistics'
import Charts from './components/Charts'

function App() {
  return (
    <>
      <AppProvider>
        <Card />
        <Statistics />
        <Charts />
      </AppProvider>


    </>

  )
}

export default App