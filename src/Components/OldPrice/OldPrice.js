import React from 'react';
import style from './OldPrice.module.css';
export const OldPrice = (props) => {
  return <p className={style.product_oldprice}>{props.oldPrice}</p>;
};
