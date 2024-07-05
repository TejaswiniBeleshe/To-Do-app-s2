import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Search from './components/Seach';
import ListOfTo from './components/ListOfTo';
import { UseProvider } from './components/ContextAPI/UseContext';

function App() {
  let [todos,setTodos] = useState([]);
  let [check,setCheck] = useState(false);
    
  const deleteFun = (id)=>{
      console.log('delete',id)
      setTodos((prev)=>prev.filter((todo)=>{
         return todo.id !== id;
      }))

  }
  const updateFun =(id,input)=>{
      // console.log("update");
      setTodos((prev)=>prev.map((todo)=>{
        if(todo.id == id){
          // console.log('hi')
          return {...todo,do:input}

        } 
        else{
          // console.log('heloo')
          return todo;
        }
      }))
      // console.log("update"); 
  }
  const toggleCheck = (id)=>{
      console.log('toggle check',id);
      setTodos((prev)=>prev.map((todo)=>{
        if(todo.id === id){
          return {...todo,completed:!todo.completed}
        }
         else{
          return todo;
         }
      }))
      
  }
  useEffect(()=>{
    let res = JSON.parse(localStorage.getItem('todos'));
    if(res && res.length>0){
      setTodos(res)    
    }
  },[])
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])
 
  return (
   
    <div className="App">
      <UseProvider value={{todos,setTodos,updateFun,deleteFun,toggleCheck,check}}>
        <Search/>
        <ListOfTo/>
      </UseProvider>
    </div>
  );
}

export default App;







 // let [edit,setEdit] = useState(true);
  // let [data,setData] = useState('hello how are you')
  // const editFun = (edit)=>{
  //   setEdit(!edit)
  // }
  // <input type='text' value={data} onChange={(e)=>setData(e.target.value)} readOnly={edit} style={!edit?{outline:"2px solid black"}:{outline:"none"}}/> {"           "}
  //      <button onClick={()=>editFun(edit)}>{edit?"✏":"📂"}</button>   