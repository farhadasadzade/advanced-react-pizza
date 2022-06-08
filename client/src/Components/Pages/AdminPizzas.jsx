import React from 'react'

import AdminPizza from '../AdminPizza'

import { useSelector } from 'react-redux';

const AdminPizzas = () => {

    const pizzas = useSelector(({ adminPizzas }) => adminPizzas.pizzas);

  return (
    <div className="admin__pizzas">
        {pizzas.length > 0 &&
            pizzas.map((pizza) => <AdminPizza key={pizza._id} {...pizza} />)
        }
    </div>
  )
}

export default AdminPizzas