import React from 'react'
import AddTodoForm from "./AddTodoForm";
import TodoItems from "./TodoItems";
import TotalItems from "./TotalItems";


export default function App() {
  return (
    <div>
        <AddTodoForm />
        <TotalItems />
        <TodoItems />
        
    </div>
  )
}
