import React from 'react'
import {FaTrashAlt} from "react-icons/fa"


const LineItems = ({item,handlecheck,handledelete}) => {
  return (
    <li className="item">
        <input type="checkbox"
            onChange={()=>handlecheck(item.id)}
        checked={item.checked} />
        <label 
            style={(item.checked)?{
                textDecoration:
                'line-through'
            }:null}
            onDoubleClick={()=>handlecheck(item.id)}
        >{item.item}</label>
        <FaTrashAlt
            onClick={()=>handledelete(item.id)} 
            role="button"
            tabIndex="0" 
            aria-label={`delete ${item.item}`}
            />
    </li>
        
  )
}

export default LineItems
