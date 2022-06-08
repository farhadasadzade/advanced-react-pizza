import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {Link, Route, Routes} from 'react-router-dom'

import { getPizzas } from '../../redux/actions/adminPizzas'

import NewPizza from '../NewPizza'

import Swal from 'sweetalert2'
import AdminPizzas from './AdminPizzas'
import Orders from './Orders'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})


const AdminPanel = () => {

    const dispatch = useDispatch()

    const [newPizza, setNewPizza] = useState(false)

    const success = useSelector(({adminPizzas}) => adminPizzas.success)

    useEffect(() => {
      dispatch(getPizzas())
    }, [dispatch])

    switch(success) {
      case 200: {
        Toast.fire({
          icon: 'success',
          title: 'Pizza silindi'
        })
        dispatch({ type: 'SUCCESS', payload: null })
        break
      }
      default: {
  
      }
    }
    
  return (
    <div>
        {newPizza && <NewPizza setNewPizza={setNewPizza}/>}
        <div className="admin__header">
            <h2>AdminPanel</h2>
            <div className="admin__header-links">
                <Link to='/admin-panel/orders'><button className="header__btn"><pre>Sifarişlər</pre></button></Link>
                <button className="header__btn" onClick={() => setNewPizza(true)}><pre>+ Yeni pizza</pre></button>
            </div>
        </div>
        <Routes>
          <Route path='/' element={<AdminPizzas />} />
          <Route path='/orders' element={<Orders />}/>
        </Routes>
    </div>
  )
}

export default AdminPanel