import React from 'react'
import { useState } from 'react'

const TodoTest = () => {
   const obj={
        task:''
    }
    const [details,setDetails]=useState(obj)
    const [todos,setTodos]=useState([])
    const [editid, setEditid] = useState(null);

    const handleChange=(e)=>{
        setDetails({...details,task:e.target.value})
    }
    const handleAdd=()=>{
        if (editid !== null) {
            const updatedTodos = [...todos];
            updatedTodos[editid] = { task: details.task };
            setTodos(updatedTodos);
            setEditid(null);
          } else {
            setTodos([...todos, { task: details.task }]);
          }
      
          setDetails({ task: '' });
    }
    const handleDelete=(ind)=>{
       const newTodo=todos.filter((item,index)=>{
           return index!==ind;
       })
       setTodos(newTodo)
    }
    const handleEdit=(ind)=>{
        const updateTodo = todos.find((i, index) => {
            return index === ind;
          });
          console.log(updateTodo);
          setDetails({task:updateTodo.task});
          setEditid(ind);
    //       setDetails({ task: todos[index].task });
    // setEditId(index);
    }
  return (
    <>
    <input type="text" onChange={(e)=>handleChange(e)} value={details.task} />
    <button onClick={()=>handleAdd()}>Add</button>
    {todos.map((item,ind)=>{
        return(
         
           <div key={ind}>
            <input type="checkbox"  />
           <span>Task:{item.task}</span>
           <button onClick={()=>handleEdit(ind)}>Edit</button>
           <button onClick={()=>handleDelete(ind)}>Delete</button>
           </div>
           
        )
    })}
    </>
  )
}

export default TodoTest