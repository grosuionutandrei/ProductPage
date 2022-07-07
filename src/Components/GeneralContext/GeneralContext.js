import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartContextProvider = (props) => {
  const [quantity, setQuantity] = useState(0);
  const [productImage, setProductImage] = useState('');
  const [price, setPrice] = useState(0);
  const [product, setProduct] = useState('');

  const saveCart = window.localStorage;

  useEffect(() => {
    console.log(quantity);
    console.log(product);
    if (quantity > 0) {
      setTimeout(addToCart(product, price, quantity), 0);
    }
    return () => {};
  }, [quantity]);

  // modifica clasa butonului de add to basket din cauza ca se micsoreaza prea mult si nu mai merge eventul de on click

  function addToCart(name, price, pieces) {
    const cart = saveCart.getItem('cart');
    if (cart === null) {
      saveCart.setItem(
        'cart',
        JSON.stringify([{ product: name, cost: price, quantity: pieces }])
      );
      console.log('cart initialized');
      return;
    }
    const tempCart = JSON.parse(cart);
    console.log(name, price, pieces);

    for (const elem of tempCart) {
      console.log(elem.product === name);
      if (elem.product !== name) {
        tempCart.push({ product: name, cost: price, quantity: pieces });
        saveCart.setItem('cart', JSON.stringify(tempCart));
        console.log(`added ${tempCart}`);
        return;
      }

      elem.quantity = elem.quantity + pieces;
      saveCart.setItem('cart', JSON.stringify(tempCart));
      console.log(`modified ${elem} `);
      return;
    }
  }

  const getQuantity = (value) => {
    setQuantity(value);
  };

  function getImageSource(value) {
    setProductImage(value);
  }

  const getPrice = (value) => {
    setPrice(value);
  };

  const getProduct = (value) => {
    setProduct(value);
  };

  // console.log(quantity);
  // console.log(product);
  // console.log(productImage);

  return (
    <CartContext.Provider
      value={{
        quantity,
        getQuantity,
        getImageSource,
        productImage,
        getPrice,
        price,
        getProduct,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export const useCartContexProvider = () => {
  return useContext(CartContext);
};
