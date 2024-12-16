import React from 'react'
import { useSelector } from 'react-redux'

export default function TotalItems() {
  const todoLength = useSelector((state) => state.todos).length

  return (
    <div className='container'>
      TotalItems: {todoLength}
    </div>
  )
}
