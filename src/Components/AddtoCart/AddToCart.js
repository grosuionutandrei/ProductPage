import React, { useEffect, useRef, useState } from 'react';
import style from './AddToCart.module.css';
import { useCartContexProvider } from '../GeneralContext/GeneralContext';
export const AddToCart = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const addToCart = useRef(null);
  const addName = useRef(null);
  const { setModifyCart } = useCartContexProvider();
  useEffect(() => {
    isClicked
      ? (addToCart.current.className = `${style.product_add__container__clicked}`)
      : (addToCart.current.className = `${style.product_add__container}`);
    return () => {};
  }, [isClicked]);

  const handleMouse = (event) => {
    setIsClicked(true);
    props.isClicked(true);
    props.getAdded(true);
    setModifyCart(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
    props.isClicked(false);
    props.getAdded(false);
    setModifyCart(false);
  };

  return (
    <button
      ref={addToCart}
      className={style.product_add__container}
      onMouseDown={handleMouse}
      onMouseUp={handleMouseUp}
    >
      <p ref={addName} className={style.product_add__text}>
        Add to cart
      </p>
    </button>
  );
};
