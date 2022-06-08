import React, { useState } from 'react';
import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeCartItem, plusCartItem, minusCartItem } from '../../redux/actions/cart';

import CartItem from './../CartItem';
import EmptyCart from '../EmptyCart';
import NewOrder from '../NewOrder';


const Cart = () => {

    const [newOrder, setNewOrder] = useState(false)

    const dispatch = useDispatch();
    const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);

    const addedPizzas = Object.keys(items).map((key) => {
      return items[key].items[0];
    });
  
    const onClearCart = () => {
      if (window.confirm('Səbəti təmizləmək istədiyinizə əminsiniz?')) {
        dispatch(clearCart());
      }
    };
  
    const onRemoveItem = (id) => {
      if (window.confirm('Silmək istədiyinizə əminsiniz?')) {
        dispatch(removeCartItem(id));
      }
    };
  
    const onPlusItem = (id) => {
      dispatch(plusCartItem(id));
    };
  
    const onMinusItem = (id) => {
      dispatch(minusCartItem(id));
    };

    const handleOrder = () => {
      setNewOrder(true)
    }
  
  
  return <div className="cart__main">
    {addedPizzas.length === 0 ? <EmptyCart /> : 
    <>
      <div className="cart__header">
      <div className="cart__header-logo">
          <FontAwesomeIcon icon={faCartShopping} /> Səbət
      </div>
      <button className="cart__header-btn" onClick={onClearCart}><i className="fa-regular fa-trash-can"></i> Səbəti təmizlə</button>
  </div>
  {addedPizzas.map((obj) => (
              <CartItem
                key={obj._id}
                id={obj._id}
                image={obj.image}
                name={obj.name}
                size={obj.size}
                totalPrice={items[obj._id].totalPrice}
                totalCount={items[obj._id].items.length}
                onRemove={onRemoveItem}
                onMinus={onMinusItem}
                onPlus={onPlusItem}
              />
            ))}
  <div className="cart__pizza-count">
      <div>
          Pizzaların sayı: {totalCount} 
      </div>
      <div>
          Sifarişin həcmi: <span>{totalPrice} ₼</span>
      </div>
  </div>
  <div className="cart__pizza-buy">
      <Link to="/"><button>Geriye qayıt</button></Link>
      <button onClick={() => handleOrder()}>Sifariş ver!</button>
  </div>
    </>}
    {newOrder && <NewOrder setNewOrder={setNewOrder} items={items} totalPrice={totalPrice} />}
</div>;
};

export default Cart;
