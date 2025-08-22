import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import axios from 'axios'
import { Turnstile } from '@marsidev/react-turnstile';

function App() {
  const [token, setToken] = useState<string>("");

  return (
    <>
      <input placeholder="OTP" ></input>
      <input placeholder="Password"></input>

      <Turnstile onSuccess={(token) => {
        setToken(token)
      }} siteKey='1x00000000000000000000AA' />

      <button onClick={()=> {
        axios.post("http://localhost:3000/reset-password", {
          email: "test@mail.com",
          otp: "123123",
          token: token
        })
      }} ></button>
    </>
  )
}

export default App
