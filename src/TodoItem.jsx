import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleComplate } from './store/todoSlice';

export default function TodoItem({ id, title, complated }) {

  const dispatch = useDispatch();

  const handleComplateClick = () =>{
    dispatch(toggleComplate({
      id,
      complated: complated
    }))
  }

  const handleDelete = () =>{
    dispatch(deleteTodo({
      id
    }))
  }


  return (
    <li className='list-group-item'>
      <div className='d-flex justify-content-between'>
        <span className='d-flex align-items-center'>
          <input
            type="checkbox"
            className='me-3'
            checked={complated}
            onChange={handleComplateClick}
          />
         <h4
         style={{
          display: "inline",
          textDecoration: complated ? "line-through" : "none"
         }}
         >
         {title}
         </h4>
        </span>

        <button
         className='btn btn-danger'
         onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </li>
  )
}
