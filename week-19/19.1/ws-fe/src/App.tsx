import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null)
  const [ltmessage, setLtmessage] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const socket= new WebSocket('ws://localhost:8080')
    socket.onopen = () => {
      console.log("Connected")
      setSocket(socket)
    }
    socket.onmessage =(message) => {
      console.log('Received Message:', message.data)
      setLtmessage(message.data)
    }
  }, [])


  if(!socket) {
    return <div>
      Connecting to Socket...
    </div>
  }

  return (
    <>
      <input onChange={(e) => {
        setMessage=e.target.value
      }} ></input>
      <button onClick={() => {
        socket.send(message);
      }}>
        Send</button>
      {ltmessage}
    </>
  )
}

export default App
