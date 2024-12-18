import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './componenets/Sidebar'
import MainWindow from './componenets/MainWindow'

function App() {

  return (
    <div className='flex'>
      <Sidebar />
      <MainWindow />
    </div>
  )
}

export default App
