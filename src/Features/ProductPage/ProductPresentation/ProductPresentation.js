import React, { useState, useRef, useEffect } from 'react';
import productSmall1 from '../../../files/images/image-product-1-thumbnail.jpg';
import productSmall2 from '../../../files/images/image-product-2-thumbnail.jpg';
import productSmall3 from '../../../files/images/image-product-3-thumbnail.jpg';
import productSmall4 from '../../../files/images/image-product-4-thumbnail.jpg';
import productBig1 from '../../../files/images/image-product-1.jpg';
import productBig2 from '../../../files/images/image-product-2.jpg';
import productBig3 from '../../../files/images/image-product-3.jpg';
import productBig4 from '../../../files/images/image-product-4.jpg';
import style from './ProductPresentation.module.css';

import { useCartContexProvider } from '../../../Components/GeneralContext/GeneralContext';

export const ProductPresentation = (props) => {
  const { getBigScreen, getBigImageValue } = useCartContexProvider();
  const bigImages = [productBig1, productBig2, productBig3, productBig4];
  const [isClicked, setIsClicked] = useState(false);
  const bigImage = useRef(null);

  const handleClick = (event) => {
    bigImage.current.src = bigImages[event.target.id - 1];
    bigImage.current.dataset.big = event.target.id;
    props.setImageSource(bigImages[event.target.id - 1]);
    setIsClicked(true);
  };

  const handleLightBox = (event) => {
    getBigImageValue(event.target.dataset.big);
    getBigScreen(true);
  };

  return (
    <>
      <article className={style.product_presentation__container}>
        <img
          ref={bigImage}
          data-big="1"
          id="bigImage"
          src={productBig1}
          alt="snickers big"
          className={style.product_presentation__big}
          onClick={handleLightBox}
        />
        <div className={style.product_presentation__thumbnail}>
          <img
            id="1"
            src={productSmall1}
            alt="snickers 1"
            className={style.product_thumbnail}
            onClick={handleClick}
          />
          <img
            id="2"
            src={productSmall2}
            alt="snickers 2"
            className={style.product_thumbnail}
            onClick={handleClick}
          />
          <img
            id="3"
            src={productSmall3}
            alt="snickers 3"
            className={style.product_thumbnail}
            onClick={handleClick}
          />
          <img
            id="4"
            src={productSmall4}
            alt="snickers 4"
            className={style.product_thumbnail}
            onClick={handleClick}
          />
        </div>
      </article>
    </>
  );
};
