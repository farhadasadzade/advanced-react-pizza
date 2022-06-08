import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import {getOrders} from '../../redux/actions/orders'

import Order from '../Order'


const Orders = () => {

  const dispatch = useDispatch()

  const orders = useSelector(({orders}) => orders.orders)

  useEffect(() => {
    dispatch(getOrders())
  }, [dispatch])

  return (
    <div className="admin__pizzas">
        {orders.length > 0 && orders.map((order) => <Order key={order._id} {...order} />)}
    </div>
  )
}

export default Orders