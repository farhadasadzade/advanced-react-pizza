import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import Button from './Button';
import { useSelector } from 'react-redux';

const Header = () => {

  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo">
          <img className="header__logo-img" src={logo} alt="logo" />
          <div className="header__logo-content">
            <h1 className="header__logo-title">REACT PIZZA</h1>
            <p className="header__logo-text">kainatın ən dadlı pizzası</p>
          </div>
        </div>
      </Link>
      <Link to="/cart">
        <Button header>
          <pre>
            {' '}{totalPrice} ₼ | <i className="fa-solid fa-cart-shopping"></i> {totalCount}{' '}
          </pre>
        </Button>
      </Link>
    </header>
  );
};

export default Header;
