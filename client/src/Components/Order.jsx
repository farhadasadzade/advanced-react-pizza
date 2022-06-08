import React, { useState } from 'react'


import Button from './Button'
import OrderDetails from './OrderDetails'

import {useDispatch} from 'react-redux' 
import {deleteOrder} from '../redux/actions/orders'


const Order = ({customerName, customerSurname, _id, adress, orderItems, phone}) => {

  const dispatch = useDispatch()

  const [orderDetails, setOrderDetails] = useState(false)

  return (
    <>
      <div className='order' >
      <div className="order__desc" onClick={() => setOrderDetails(true)} >
        {`${customerName} ${customerSurname}`}
      </div>
      <Button onClick={() => dispatch(deleteOrder(_id))} >Sifariş çatdırıldı</Button>
    </div>
    {orderDetails && <OrderDetails setOrderDetails={setOrderDetails} customerName={customerName} customerSurname={customerSurname} adress={adress} items={orderItems} phone={phone} />}
    </>
  )
}

export default Order