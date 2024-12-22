import TodoItem from "./ToDoItem";

function TodoList(prop) {

  return (
    <ul>
      {prop.task.map((itm) => (
       
        <TodoItem key={itm.id} list={itm} ondelete={prop.ondelete} onedit={prop.onedit} onmark ={prop.onmark} ></TodoItem>
      ))}
    </ul>
  );
}

export default TodoList;
