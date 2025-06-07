import { useState, useEffect } from 'react'

function useTodos() {
    const [todos, setTodos] = useState([]);
  
  useEffect(() => {
  axios.get('')
    .then((res) => {
      setTodos(res.data)
  })
  }, [])
  return todos;
}

function App() {
 const todos = useTodos();
 return <div>
  {todos}
 </div>
}




// function App() {
//   const [counter, setCounter] = useState(0)
//   const [inputValue, setInputValue] = useState(1);

//   let count = useMemo(() => {
//     let finalCount =0;
//     for (let i=1; i<= inputValue; i++) {
//       finalCount = finalCount + i;
//     }
//     return finalCount;
//   }, [inputValue]);

//   return (
//     <>
//      <input onChange={function(e) {
//       setInputValue(e.target.value);
//      }} placeholder={"find sum from 1 to n"} />
//      <br />
//      Sum from 1 to{inputValue} is {count}
//      <br />
//      <button onClick={() => {
//         setCounter(counter + 1); 
//      }}>Counter ({counter})</button>
//      </>
//   )
// }

export default App
