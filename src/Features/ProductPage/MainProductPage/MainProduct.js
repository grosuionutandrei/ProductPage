import React, { useEffect, useState } from 'react';
import { ProductDescription } from '../ProductDescription/ProductDescription';
import { ProductPresentation } from '../ProductPresentation/ProductPresentation';
import { useCartContexProvider } from '../../../Components/GeneralContext/GeneralContext';
import style from './MainProduct.module.css';
export const MainProduct = () => {
  const [imageSource, setImageSource] = useState('');
  const [isAdded, setIAdded] = useState(false);
  const { getImageSource } = useCartContexProvider();

  useEffect(() => {
    if (isAdded) {
      getImageSource(imageSource);
    }

    return () => {};
  }, [isAdded]);

  let name = 'Fall Limited Edition2 Sneakers';

  const getSource = (value) => {
    setImageSource(value);
  };
  const getIsAdded = (value) => {
    setIAdded(value);
  };

  return (
    <div className={style.product_main__container}>
      <ProductPresentation setImageSource={getSource} />
      <ProductDescription name={name} getAdded={getIsAdded} />
    </div>
  );
};
