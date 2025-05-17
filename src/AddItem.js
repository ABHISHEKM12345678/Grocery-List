import React from 'react'
import {FaPlus} from 'react-icons/fa'
import { useRef } from 'react'

const AddItem = ({newItem,setnewItem,handleSubmit}) => {
    const inputRef=useRef();
  return (
   <form className='addForm' onSubmit={handleSubmit}>
    <label htmlFor='addItem'>Add Item</label>
    <input
        autoFocus
        ref={inputRef}
        type="text"
        id='addItem'
        placeholder='Add item'
        required
        value={newItem}
        onChange={(e)=>setnewItem(e.target.value)}
    />
    <button 
        type='submit' 
        onClick={()=>inputRef.current.focus()}
        aria-label='Add item'>
        
        <FaPlus />
    </button>
   </form>
  )
}

export default AddItem
