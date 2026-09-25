import { useState ,useEffect } from "react";


const useFetch = (url) => {
    const [data, setData] = useState(null);
      const[ISPending,setIsPending]=useState(true);
      const[error,setError]=useState(null);
    useEffect ( () =>{
      const abortCont =new AbortController();
         setTimeout(() => {
           fetch(url,{signal:abortCont.signal})
          .then(res => {
            if(!res.ok){
              throw Error('could not fetch the data to this resource ');
            }
            return res.json();
          })
          .then(data => {
           setData(data);
           setIsPending(false);
           setError(null);
          })
          .catch(err =>{
            if(err.name == "AbortError"){
              console.log("fetch aborted")
            }
            else{
               setIsPending(false);
               setError(err.message);
            }
            
          })
         },1000)   
         return () => abortCont.abort();
         } , [url]);
         return {data ,ISPending ,error }
}

export default useFetch;