import React, { useContext, useState,useEffect } from "react";
import styles from "./Todo.module.css";
import {created} from "./ContextAPI/UseContext"

const Todo = ({todo})=>{

    const [task,setTask] = useState(todo.do);
    const [edit,setEdit] = useState(true);
    let {deleteFun,updateFun,toggleCheck,check} = useContext(created);
    
    const editTodo = (id,text)=>{
        setEdit(!edit);
        if(task !== text){
            updateFun(id,task);
        }
    }
    return(
        <div className={styles.todo} id={todo.id}>
            
            <input type="checkbox" onChange={()=>toggleCheck(todo.id)} />
            {todo.completed?<input type="text" style={{textDecoration:"line-through"}} value={task} onChange={(e)=>setTask(e.target.value)} readOnly={edit}/>:<input type="text" value={task} onChange={(e)=>setTask(e.target.value)} readOnly={edit}/>}
            
            <button onClick={()=>editTodo(todo.id,todo.do)}>edit</button>
            <button onClick={()=>deleteFun(todo.id)}>delete</button>
        </div>
    )
}
export default Todo;
