import { useState, useEffect } from "react";
import Cover from "./components/Cover";
import Quizzical from "./components/Quizzical";
import useFetch from "./components/useFetch";

function App() {
  const[start, setStart] = useState(true)

  const{trivia, error} = useFetch()
  const handleStart = ()=>setStart(false)

  return (
    <div className="App flex">
      {
        start 
          ?  <Cover handleStart={handleStart}/> 
          :  <Quizzical/>
      }
    </div>
  );
}

export default App;
