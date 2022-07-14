import React, { useState, useRef } from 'react';
import productSmall1 from '../../files/images/image-product-1.jpg';
import productSmall2 from '../../files/images/image-product-2-thumbnail.jpg';
import productSmall3 from '../../files/images/image-product-3-thumbnail.jpg';
import productSmall4 from '../../files/images/image-product-4-thumbnail.jpg';
import productBig1 from '../../files/images/image-product-1.jpg';
import productBig2 from '../../files/images/image-product-2.jpg';
import productBig3 from '../../files/images/image-product-3.jpg';
import productBig4 from '../../files/images/image-product-4.jpg';
import style from '../../Features/ProductPage/ProductPresentation/ProductPresentation.module.css';
import next from '../../files/images/icon-next.svg';
import previous from '../../files/images/icon-previous.svg';
import close from '../../files/images/icon-close.svg';
import nextOrange from '../../files/images/icon_next_orange.svg';

import { Background } from './BackGround';
import lightStyle from './LightBox.module.css';

export const LightBox = (props) => {
  const bigImages = [productBig1, productBig2, productBig3, productBig4];
  const [isClicked, setIsClicked] = useState(false);
  //   add on mouse down and on mouse up events to change the stroke color;
  const bigImage = useRef(null);
  const index = useRef();
  const nextR = useRef('#1D2026');
  const previousR = useRef();
  const closeR = useRef();

  //  to add use state because i need to rerender the componenet in order to change svg stroke
  const handleClick = (event) => {
    bigImage.current.src = bigImages[event.target.id];
    index.current = event.target.id;
  };

  const switchNext = () => {
    nextR.current.src = nextOrange;
    if (index.current === undefined) {
      index.current = 0;
    }
    if (Number(index.current) === 3) {
      return;
    }
    bigImage.current.src = bigImages[Number(index.current) + 1];
    index.current++;
  };

  const switchPrevious = () => {
    if (index.current === undefined) {
      index.current = 0;
    }
    if (Number(index.current) === 0) {
      return;
    }

    bigImage.current.src = bigImages[Number(index.current) - 1];
    index.current--;
  };

  return (
    <Background>
      <article className={style.product_presentation__container}>
        <img
          ref={closeR}
          src={close}
          alt="close logo"
          className={lightStyle.light_box__close}
        />
        <section className={lightStyle.light_box__carusel}>
          <div className={lightStyle.light_controls} onClick={switchNext}>
            <img ref={nextR} src={next} alt="next logo" />
          </div>

          <img
            ref={bigImage}
            id="bigImage"
            src={productBig1}
            alt="snickers big"
            className={lightStyle.product_presentation__big}
          />

          <div className={lightStyle.light_controls} onClick={switchPrevious}>
            <img ref={previousR} src={previous} alt="previous logo" />
          </div>
        </section>

        <div className={style.product_presentation__thumbnail}>
          <img
            id="0"
            src={productSmall1}
            alt="snickers 1"
            className={style.product_thumbnail}
            onClick={handleClick}
          />
          <img
            id="1"
            src={productSmall2}
            alt="snickers 2"
            className={style.product_thumbnail}
            onClick={handleClick}
          />
          <img
            id="2"
            src={productSmall3}
            alt="snickers 3"
            className={style.product_thumbnail}
            onClick={handleClick}
          />
          <img
            id="3"
            src={productSmall4}
            alt="snickers 4"
            className={style.product_thumbnail}
            onClick={handleClick}
          />
        </div>
      </article>
    </Background>
  );
};
