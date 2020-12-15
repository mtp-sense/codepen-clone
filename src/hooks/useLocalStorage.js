import { useState, useEffect } from "react";

const PREFIX = "codepen-clone-";

function useLocalStorage(key, initialValue){
    const prefixedKey = PREFIX+key;

    const [value, setValue] = useState(()=>{
      const jsonvalue = localStorage.getItem(prefixedKey);
      //If we find the value in the localstorage which was previously stored then parse the json value and return 
      if(jsonvalue != null ) return JSON.parse(jsonvalue);
      if(typeof initialValue === "function"){
          return initialValue();
      }else
          return initialValue;
    });

    useEffect(()=>{
       localStorage.setItem(prefixedKey, JSON.stringify(value));
    },[prefixedKey, value])

  return [value, setValue];
}
export default useLocalStorage;