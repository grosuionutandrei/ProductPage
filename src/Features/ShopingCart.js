import React from 'react';
import style from './ShopingCart.module.css';
import { Cart } from '../Features/Cart/Cart';
export const ShoppingCartNavigation = (props) => {
  return (
    <article className={style.shoping_container}>
      <img src={props.src1} alt={props.alt1} />
      <img
        src={props.src2}
        alt={props.alt2}
        className={style.shoping_profile}
      />
      <Cart></Cart>
    </article>
  );
};
