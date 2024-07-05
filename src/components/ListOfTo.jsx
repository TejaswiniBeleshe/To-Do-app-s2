import React, { useContext } from "react";
import styles from "./ListOfTo.module.css"
import Todo from "./Todo";
import { created } from "./ContextAPI/UseContext";
const ListOfTo = ()=>{
    const {todos} = useContext(created)
    
    return(
        <div className={styles.list} >
            {
                todos.map((todo)=>(
                    <Todo todo={todo} key={todo.id}/>
                ))

            }
        </div>
    )

}
export default ListOfTo;