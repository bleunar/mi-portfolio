import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages'
import NavigationBar from './sections/NavigationBar'
import NonePage from './pages/None'

function App() {

  return (
    <div className='bg-pattern'>
      <NavigationBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NonePage />} />
      </Routes>

    </div>
  )
}

export default App
