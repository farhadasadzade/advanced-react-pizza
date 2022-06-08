import React from 'react'

import {Link} from 'react-router-dom'

import emptyImg from '../assets/img/emptycart.png'

import Button from './Button'

const EmptyCart = () => {
  return (
    <div className='empty'>
        <h1>Səbət boşdur 😕</h1>
        <p>Yəqin ki, siz hələ pizza sifariş etməmisiniz. <br />
        Pizza sifariş etmək üçün əsas səhifəyə keçin.</p>
        <img src={emptyImg} alt="" />
        <Link to='/'><Button>Geriyə qayıt</Button></Link>
    </div>
  )
}

export default EmptyCart