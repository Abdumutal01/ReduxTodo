import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

function TodoItems(props) {
 
    const todos = useSelector((state) => state.todos)

    return (

       <ul className='list-group container'>
        {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
        ))}
       </ul>
    
);
}

export default TodoItems;
