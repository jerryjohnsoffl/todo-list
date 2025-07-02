import React from 'react'
import TrashIcon from '../img/trash-can-regular.svg'

function ToDoList({text, isComplete, id, deleteItem, toggle}) {
  return (
    <div className="container my-4">
        <li className='list-none flex flex-wrap items-center justify-between'>
          <div className='flex items-center'>
          {isComplete ? <i onClick={()=>toggle(id)} className="fa-regular fa-circle-check mr-3 text-redColor"></i> : <i onClick={()=> toggle(id)} className="fa-regular fa-circle mr-3 text-redColor"></i>}
          <p className='text'>{text}</p>
          </div>
          <div onClick={()=> deleteItem(id)} className='h-4 w-4' ><img src={TrashIcon} alt="delete" /></div>
          </li>
    </div>
  )
}

export default ToDoList;