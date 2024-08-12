import React from 'react'
import './NewItems.css'
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'

const NewItems = () => {
  return (
    <div className='newitems'>
        <h1>NEW ITEMS</h1>
        <hr />
        <div className="collection">
            {new_collections.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
            })}
        </div>
    </div>
  )
}

export default NewItems
