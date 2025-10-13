import {useState , useEffect } from "react";
import classes from './styles.module.css'
import TodoItem from "./components/todo-items";



function App() {

  const [todoList , setTodoList] = useState([]);
  const [loading , setLoading] = useState([]);
  const [errorMsg , setErrorMsg] = useState(null)

  async function fetchListOfTodos() {
    try {
      setLoading(true);
      const apiResponse = await fetch('https://dummyjson.com/todos')
      const result = await apiResponse.json();

      console.log(result)

      if(result?.todos && result?.todos?.length > 0 ){
        setTodoList(result?.todos);
        setLoading(false);
        setErrorMsg('');
      }else{
        setTodoList([]);
        setLoading(false);
        setErrorMsg('')
      }

    }catch(e){
      console.log(e);
    }
  }


  useEffect(()=>{
    fetchListOfTodos()
  },[])

  return (
    <div className={classes.mainWrapper}>
    <h1 className={classes.headerTitle}>Simple ToDo using material UI</h1>
    <div className={classes.todoListWrapper}>
        {
          todoList && todoList.length> 0 ?
          todoList.map(todoItem => <TodoItem todo = {todoItem}/>) : null
        }
    </div>
    </div>
  )
}

export default App
