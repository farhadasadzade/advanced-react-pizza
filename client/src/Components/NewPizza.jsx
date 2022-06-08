import React, { useState } from 'react'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import TextField from '@mui/material/TextField'
import Swal from 'sweetalert2'

import { createPizza } from '../redux/actions/adminPizzas'





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

const NewPizza = ({setNewPizza}) => {

  const dispatch = useDispatch()

  const success = useSelector(({adminPizzas}) => adminPizzas.success)

  const [pizzaData, setPizzaData] = useState({name: '', prices: [], image: ''})

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(createPizza(pizzaData))
  }

  switch(success) {
    case 201: {
      Toast.fire({
        icon: 'success',
        title: 'Yeni pizza əlavə olundu'
      })
      dispatch({ type: 'SUCCESS', payload: null })
      break
    }
    default: {

    }
  }

  return (
    <div className='newpizza'>
        <div className="newpizza__back"></div>
        <form action="submit">
            <div className="exit__btn" onClick={() => setNewPizza(false)}><FontAwesomeIcon icon={faXmark} /></div>
            <h1>Yeni Pizza</h1>
            <TextField fullWidth margin='normal' label='Pizzanın adı' onChange={(e) => setPizzaData({...pizzaData, name: e.target.value})} />
            <TextField fullWidth margin='normal' label='Pizzanın qiymətləri (X,X,X)' onChange={(e) => setPizzaData({...pizzaData, prices: e.target.value.split(',')})} />
            <label className='newpizza__img'>
                Pizanın şəkli: <FileBase type='file' multiple={false} onDone={({base64}) => setPizzaData({...pizzaData, image: base64})} />
            </label>
            <button type='submit' className='header__btn' onClick={handleSubmit} ><pre>Əlavə et</pre></button>
        </form>
    </div>
  )
}

export default NewPizza