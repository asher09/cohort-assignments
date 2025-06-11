import React from 'react';
import {RecoilRoot, useSetRecoilState, useRecoilValue} from 'recoil';
import {countAtom} from './store/atoms/count';
import {evenSelector} from './store/atoms/count';

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer/>
    <Button/>
  </div>
}
function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
  <b>
        {count}
  </b>
  <EvenCountRenderer/>
  </div>
}

function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);
  return <div>
    {isEven ? "Even" : "Odd"}
  </div>
}

function Button() {    
  const setCount = useSetRecoilState(countAtom);
  console.log("renrendered");
  return <div>
    <button onClick ={() => {
      setCount(count => count+1)
    }} >Increase</button>
        <button onClick ={() => {
      setCount(count => count-1)
    }} >Decrease</button> 
  </div>

}

export default App



























// import {lazy} from 'react'
// import {BrowserRouter, Routes, Route,  useNavigate} from 'react-router-dom'

// const Dashboard = lazy(() => import('./components/Dashboard'))
// const Landing = lazy(() => import('./components/Landing'))
// import { createContext } from 'react';
// import { countAtom } from './store/atoms/count';
// import { useSetRecoilState } from './../../7-2/node_modules/recoil/index.d';
// import { react } from '@vitejs/plugin-react';

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
