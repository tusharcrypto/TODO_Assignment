import { useState } from "react";
import TodoList from "./TodoList";
import {v4 as uuid4} from 'uuid'
function Header(){
  const [value,setValue] = useState("")
  const [list,setList] = useState([]);
  function handlesubmit(e){
    e.preventDefault();
    if(value==''){
      alert('Plz Enter the task')
      return;
    }
    setList((prev)=>{
      return [...prev,{
        id:uuid4(),
        value:value,
        ismark:false
      }]
    })
    setValue("")
    // settask("")
  }
  function handlechange(e){
    e.preventDefault();
    setValue(e.target.value)
  }

  function handledelete(id){
    setList((prev)=> prev.filter((item)=> item.id!==id))
  }
function handedit(id){
    for(let i=0;i<list.length;i++){
       if(list[i].id==id){
        setValue(list[i].value)
        handledelete(list[i].id)
       }
    }
}

function handlemark(id){
   setList((prev)=> prev.map((item)=> item.id == id ? {...prev,id:item.id,value:item.value,ismark :!item.ismark}:item))
}

 return (
  <div className="bg-red-200  py-10">
  <h1 className="ml-14 text-3xl text-green-500 px-14 pt-2 ">ToDo List</h1>
  <form onSubmit={handlesubmit} className="mx-12 flex items-center">
   <input type="text" name="task" placeholder="Add new Task" value={value} onChange={handlechange} className="border-2 border-black rounded-md mt-2 w-52 p-1"></input>
   <button type="submit" className="border-2 bg-red-400 w-28 py-1 rounded-md m-2 items-center ">Add Task</button>
  </form>
  <TodoList task ={list} ondelete={handledelete} onedit={handedit} onmark={handlemark}></TodoList>
  </div>
 )
}
export default Header;