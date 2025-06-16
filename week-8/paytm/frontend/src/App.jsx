import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Signup} from './components/Signup.jsx';
import {Signin} from './components/Signin.jsx'
import {Dashboard} from './components/Dashboard.jsx'
import {SendMoney} from './components/SendMoney.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/send' element={<SendMoney/>} />
        </Routes> 
      </BrowserRouter>
      <div className="bg-blue-500 text-white p-4">
      <h1 className="text-2xl font-bold">Hello Tailwind v4!</h1>
    </div>
    </>
  )
}

export default App
