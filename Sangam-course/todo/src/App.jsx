import {useState , useEffect } from "react";
import classes from './styles.module.css'



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
    <div>
    <h1 className={classes.headerTitle}>Simple ToDo using material UI</h1>
    </div>
  )
}

export default App
