import React from 'react'

const OrderPizza = ({image, name, size}) => {
  return (
    <div className="admin__pizza">
        <div className="admin__pizza-info">
            <img src={image} alt="" />
            <h2>{name}</h2>
            <h2>{size}</h2>
        </div>
    </div>
  )
}

export default OrderPizza