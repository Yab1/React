import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const[error, setError] = useState(null)

    useEffect(()=>{

        setTimeout(() => {
            fetch(url)
                .then(res=>{
                    if(!res.ok){
                        throw Error("could not fetch the data for that resource")
                    }
                    return res.json()
                })
                .then(data=>{
                    setData(data)
                    setIsPending(null)
                })
                .catch(e=>{
                    setError(e.message)
                    setIsPending(false)
                })
        }, 100);
    },[url])

    return {data, isPending,error}
}

export default useFetch;