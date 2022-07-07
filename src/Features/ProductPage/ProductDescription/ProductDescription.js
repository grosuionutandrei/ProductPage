import React, { useState, useEffect } from 'react';
import { Discount } from '../../../Components/Discount/Discount';
import { Price } from '../../../Components/Price/Price';
import { OldPrice } from '../../../Components/OldPrice/OldPrice';
import style from './ProductDescrition.module.css';
import { ProductCounter } from '../../../Components/ProductsCounter/ProductsCounter';
import { AddToCart } from '../../../Components/AddtoCart/AddToCart';
import { useCartContexProvider } from '../../../Components/GeneralContext/GeneralContext';
export const ProductDescription = (props) => {
  const { getQuantity } = useCartContexProvider();
  const [resetCounter, setResetCounter] = useState(false);
  const { getProduct } = useCartContexProvider();

  const getAddToCart = (value) => {
    setResetCounter(value);
  };

  const setQuantity = (value) => {
    getQuantity(value);
  };

  const counterState = () => {
    return resetCounter;
  };

  useEffect(() => {
    if (resetCounter) {
      getProduct(props.name);
    }
    return () => {};
  }, [resetCounter]);

  return (
    <article className={style.product_description__container}>
      <h3 className={style.product_title}>SNEAKER COMPANY</h3>
      <h1 className={style.product_subtitle}>{props.name}</h1>
      <p style={{ textAlign: 'start' }}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole they'll withstand evreything the
        weather can offer.
      </p>
      <section className={style.product_description__price}>
        <Price price={125.0} />
        <Discount discount="$50%" />
        <OldPrice oldPrice="$250.00" />
      </section>
      <section className={style.product_add__container}>
        <ProductCounter isAdded={counterState} setQuantity={setQuantity} />
        <AddToCart isClicked={getAddToCart} getAdded={props.getAdded} />
      </section>
    </article>
  );
};
