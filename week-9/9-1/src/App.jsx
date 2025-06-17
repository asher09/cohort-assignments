import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//custom hook to debounce
function useDebounce(value, timeout) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    let timeoutNumber = setTimeout(() => {
      setDebouncedValue(value)
    }, timeout)
    return () => {
      clearTimeout(timeoutNumber);
    }
  }, [value])
  return debouncedValue;
}


const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 300);

  return <div>
      Deboucned value is {debouncedValue}
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Search..." />
  </div>
}

export default SearchBar



// function useIsOnline() {
//   const [IsOnline, setIsOnline] = useState(window.navigator.onLine);

//   useEffect(() => {
//     window.addEventListener("online", () => {
//       setIsOnline(true);
//     })
//     window.addEventListener("offline", () => {
//       setIsOnline(false);
//     })
//   }, [])
//   return IsOnline;
// }


// function App() {
//   const isOnline = useIsOnline();


//   if(isOnline) {
//     return "you are online"
//   }

//   return "You are offline"

// }


// export default App
