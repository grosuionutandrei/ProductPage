import React, { useEffect } from 'react';
import { useCartContexProvider } from '../GeneralContext/GeneralContext';
import style from './Price.module.css';

export const Price = (props) => {
  const { getPrice } = useCartContexProvider();

  useEffect(() => {
    getPrice(props.price);
    return () => {};
  }, [props.price]);

  return <p className={style.product_price}>{`$ ${props.price}`}</p>;
};
