import React, { useEffect, useRef, useState } from 'react';
import cart from '../../files/images/icon-menu.svg';
import style from './AddToCart.module.css';
export const AddToCart = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const addToCart = useRef(null);
  const addName = useRef(null);

  useEffect(() => {
    isClicked
      ? (addToCart.current.className = `${style.product_add__container__clicked}`)
      : (addToCart.current.className = `${style.product_add__container}`);
    isClicked
      ? (addName.current.className = `${style.product_add__text__hover}`)
      : (addName.current.className = `${style.product_add__text}`);

    // isClicked ? props.isClicked(true) : props.isClicked(false);

    return () => {};
  }, [isClicked]);

  const handleMouse = (event) => {
    setIsClicked(true);
    props.isClicked(true);
    props.getAdded(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
    props.isClicked(false);
    props.getAdded(false);
  };

  return (
    <button
      ref={addToCart}
      className={style.product_add__container}
      onMouseDown={handleMouse}
      onMouseUp={handleMouseUp}
    >
      <p
        ref={addName}
        className={style.product_add__text}
        onMouseDown={handleMouse}
        onMouseUp={handleMouseUp}
      >
        Add to cart
      </p>
    </button>
  );
};
