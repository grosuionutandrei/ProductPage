import React, { useState, useRef } from 'react';
import style from './ShopingCart.module.css';
import { OrderCart } from '../Features/Cart/OrderCart';
export const ShoppingCartNavigation = (props) => {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    if (showCart === false) {
      setShowCart(true);
    } else {
      setShowCart(false);
    }
  };

  const getShowCart = (value) => {
    setShowCart(value);
  };

  const showCartValue = () => {
    return showCart;
  };

  const cartClass = () => {
    if (showCart) {
      return 'cart_container';
    }
    return 'cart_hide';
  };

  // const emptyCartClass = () => {
  //   if (showCart) {
  //     return 'empty_cart';
  //   }
  //   return 'cart_hide';
  // };

  return (
    <article className={style.shoping_container}>
      <img src={props.src1} alt={props.alt1} onClick={handleShowCart} />
      <img
        src={props.src2}
        alt={props.alt2}
        className={style.shoping_profile}
      />
      <OrderCart cartClass={cartClass}></OrderCart>
    </article>
  );
};
