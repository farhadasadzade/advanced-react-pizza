import React from 'react';

const Button = ({ onClick, header, children }) => {
  return (
    <>
      <button onClick={onClick} className={header ? 'header__btn' : 'main__pizza-btn'}>
        {children}
      </button>
    </>
  );
};

export default Button;
