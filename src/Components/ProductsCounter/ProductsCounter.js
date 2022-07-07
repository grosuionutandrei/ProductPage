import React, { useState, useEffect } from 'react';
import minus from '../../files/images/icon-minus.svg';
import plus from '../../files/images/icon-plus.svg';
import style from './Productcounter.module.css';
export const ProductCounter = (props) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (props.isAdded()) {
      props.setQuantity(counter);
      setCounter(0);
    }

    return () => {};
  }, [props.isAdded()]);

  const handleMinus = () => {
    setCounter((prevState) => {
      if (prevState === 0) {
        return 0;
      }
      return prevState - 1;
    });
  };

  const handlePlus = () => {
    setCounter((prevState) => {
      return prevState + 1;
    });
  };
  // props.resetCounter(counter);

  return (
    <section className={style.product_counter__container}>
      <img
        src={minus}
        alt="minus sign"
        onClick={handleMinus}
        className={style.product_counter__controls}
      />
      <p className={style.product_counter}>{counter}</p>
      <img
        src={plus}
        alt="plus sign"
        onClick={handlePlus}
        className={style.product_counter__controls}
      />
    </section>
  );
};
