import React, { useState } from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function PizzaBlock({ _id, name, image, prices, onClickAddPizza, addedCount }) {
  
  const sizePrices = [{size: 26, price: prices[0]}, {size: 30, price: prices[1]}, {size: 40, price: prices[2]}]

  const [activeSize, setActiveSize] = useState(0);

  const setOnSelectSize = (index) => {
    setActiveSize(index);
  };

  const onAddPizza = () => {
    const obj = {
      _id,
      name,
      image,
      price: sizePrices[activeSize].price,
      size: sizePrices[activeSize].size
    };
    onClickAddPizza(obj);
  };

  return (
    <div className="main__pizza">
      <div className="main__pizza-info">
        <img className="main__pizza-img" src={image} alt="pizza" />
      </div>
      <h3 className="main__pizza-title">{name}</h3>
      <div className="main__pizza-properties">
        <div className="main__pizza-size">
        {sizePrices.map((item, index) => (
            <div
              key={index}
              onClick={() => setOnSelectSize(index)}
              className={classNames('main__pizza-sizelink', {
                'pizza-active': activeSize === index
              })}>
              {`${item.size} sm.`}
            </div>
          ))}
        </div>
      </div>
      <div className="main__pizza-buy">
        <h3 className="main__pizza-price">{sizePrices[activeSize].price} ₼</h3>
        <button onClick={onAddPizza} className={classNames('main__pizza-btn', {'pizza-btn-active': addedCount > 0})}>
          <FontAwesomeIcon icon={faPlus} /> Əlavə et {addedCount && <span className="pizza-btn-count">{<i>{addedCount}</i>}</span>}
        </button>
      </div>
    </div>
  );
}

PizzaBlock.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
  types: PropTypes.arrayOf(PropTypes.number),
  sizes: PropTypes.arrayOf(PropTypes.number),
};

PizzaBlock.defaultProps = {
  name: 'Pizza',
  price: 0,
  sizes: [],
  types: [],
};

export default PizzaBlock;
