import React,{ useEffect } from 'react';
import ContentLoader from "react-content-loader"

import PizzaBlock from '../PizzaBlock';

import { useDispatch, useSelector } from 'react-redux'
import { addPizzaToCart } from '../../redux/actions/cart';
import { getPizzas } from '../../redux/actions/adminPizzas';


const sortNames = [{title: 'популярности', type: 'rating'}, {title: 'по цене', type: 'price'}, {title: 'по алфавиту', type: 'name'}]

const Home = () => {
  const dispatch = useDispatch();
  const pizzas = useSelector(({ adminPizzas }) => adminPizzas.pizzas);
  const isLoaded = useSelector(({ adminPizzas }) => adminPizzas.isLoaded);
  const cartItems = useSelector(({ cart }) => cart.items);

  const loadingBlocks = Array(10).fill(0)

  useEffect(() => {
    dispatch(getPizzas())
  }, [dispatch])

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj));
  };

  return (
    <div>
      <nav className="nav">
        
      </nav>
      <h2 className="title">Bütün pizzalar</h2>
      <div className="main">
        {isLoaded ?
                pizzas.map((pizza) => (
                  <PizzaBlock onClickAddPizza={handleAddPizzaToCart} key={pizza._id} isLoading={true} {...pizza} addedCount={cartItems[pizza._id] && cartItems[pizza._id].items.length}/>
                )) 
                : loadingBlocks.map((item, index) => <ContentLoader key={index}
                speed={2}
                width={280}
                height={460}
                viewBox="0 0 280 460"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb">
                <circle cx="132" cy="142" r="110" /> 
                <rect x="0" y="273" rx="6" ry="6" width="280" height="25" /> 
                <rect x="1" y="312" rx="6" ry="6" width="280" height="85" /> 
                <rect x="2" y="409" rx="6" ry="6" width="95" height="30" /> 
                <rect x="133" y="405" rx="19" ry="19" width="148" height="35" />
                </ContentLoader>)
          }
      </div>
    </div>
  );
};

export default Home;
