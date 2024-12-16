import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './store/todoSlice';

export default function AddTodoForm(props) {
  const [value, setValue] = useState();

  const dispatch = useDispatch();
  
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo({
      title: value
    }))
    setValue("")  
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='d-flex align-items-center container mb-4 mt-2'>
        
          <div className='flex-grow-1'>
            <input 
              type="text" 
              className='form-control'
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder='Add new Todo'
              />
          </div>

      <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
      </form>
    </div>
  )
}
