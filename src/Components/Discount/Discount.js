import React from 'react';
import style from './Discount.module.css';
export const Discount = (props) => {
  return (
    <button disabled={true} className={style.product_discount}>
      {props.discount}
    </button>
  );
};
