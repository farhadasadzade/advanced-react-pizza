import React from 'react'

import { useDispatch } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { deletePizza } from '../redux/actions/adminPizzas'

const AdminPizza = ({ _id, name, image }) => {

  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deletePizza(_id))
  }

  return (
    <div className="admin__pizza">
        <div className="admin__pizza-info">
            <img src={image} alt="" />
            <h2>{name}</h2>
        </div>
        <div className="admin__pizza-links">
            <button onClick={handleDelete}><FontAwesomeIcon icon={faXmark} /></button>
        </div>
    </div>
  )
}

export default AdminPizza