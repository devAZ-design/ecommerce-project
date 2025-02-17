import React from 'react'
import './items.css'
import { Link } from 'react-router-dom'

const items = (props) => {
  return (
    <div className='items'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
      <p>{props.name}</p>
      <div className="items-price">
        <div className="item-price-new">
            ${props.new_price}
        </div>
        <div className="item-price-old">
            ${props.old_price}
        </div>
        </div>      
    </div>
  )
}

export default items
