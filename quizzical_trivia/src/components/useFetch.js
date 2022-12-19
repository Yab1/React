import { useState, useEffect } from "react";

const useFetch = () => {
    const[trivia, setTrivia] = useState(null) 
    const[error, setError] = useState(null)
    
    useEffect((url)=>{
      fetch("https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple")
        .then(res=>{
          if(!res.ok){
            throw Error("Could Not Fetch the Data from the Resource! :(")
          }
          return res.json()
        })
        .then(data=>setTrivia(data.results))
        .catch(error=>setError(error.message))
    },[])
    return {trivia, error};
}
 
export default useFetch;