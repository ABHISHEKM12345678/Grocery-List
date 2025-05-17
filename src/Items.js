import React from 'react'
import LineItems from './LineItems'

const Items = ({items,handlecheck,handledelete}) => {
    return (
    <ul>
        {items.map((item)=>(
           <LineItems
                key={item.id}
                item={item}
                handlecheck={handlecheck}
                handledelete={handledelete}
                />
        ))}
    </ul>
    )
    }

export default Items
