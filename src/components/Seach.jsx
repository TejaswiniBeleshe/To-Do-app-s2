import React, { useContext, useState } from "react";
import styles from "./Search.module.css";
import { created } from "./ContextAPI/UseContext";

const Search = ()=>{
    const [input,setInput] = useState('');
    const {setTodos} = useContext(created);

    const addFun = (input)=>{
        //console.log('add')
        setTodos((prev)=>[{id:Date.now(),do:input,completed:false},...prev])
        setInput('');  
    } 

    return(
        <div className={styles.search}>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={()=>addFun(input)}>add</button>
        </div>
    )


}

export default Search;