import {useState, useContext} from 'react';
import {CountContext} from './context.jsx' 

function App() {
  const [count, setCount] = useState(0); 

  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  )
}

function Count({setCount}) {
  return <div>
    <CountRenderer/>
    <Button setCount={setCount} />

  </div>
}
function CountRenderer() {
  const count = useContext(CountContext)
  return <div>
    {count}
  </div>
}

function Button({setCount}) {    
  const count = useContext(CountContext)
  return <div>
    <button onClick ={() => {
      setCount(count+1)
    }} >Increase</button>
        <button onClick ={() => {
      setCount(count-1)
    }} >Decrease</button>
  </div>

}

export default App



























// import {lazy} from 'react'
// import {BrowserRouter, Routes, Route,  useNavigate} from 'react-router-dom'

// const Dashboard = lazy(() => import('./components/Dashboard'))
// const Landing = lazy(() => import('./components/Landing'))
import { createContext } from 'react';

// function App() {


//   return (
  
//     <div style = {{ padding: 15, background: "Pink", color: "white"}}>
//       <BrowserRouter>
//         <Appbar/>
//         <Routes>
//           <Route path= '/Dashboard' element={<Dashboard/>} />
//           <Route path= '/' element={<Landing/>} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// function Appbar() {
//   const navigate = useNavigate();

//   return <div>
//       <button onClick={() => {
//           navigate("/Dashboard");
//         }}>Dashboard</button>

//         <button onClick={() => {
//           navigate("/");       
//         }}>Landing</button>

//   </div>
  

// }  



// export default App
