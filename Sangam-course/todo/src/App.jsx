import {useState , useEffect } from "react";




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

      

    }catch(e){
      console.log(e);
    }
  }


  useEffect(()=>{
    fetchListOfTodos()
  },[])

  return (
    <>
    <h1>Simple ToDo using material UI</h1>
    </>
  )
}

export default App
