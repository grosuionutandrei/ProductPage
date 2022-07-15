import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

const CartContext = createContext();

export const CartContextProvider = (props) => {
  const [quantity, setQuantity] = useState(0);
  const [productImage, setProductImage] = useState('');
  const [price, setPrice] = useState(0);
  const [product, setProduct] = useState('');
  const [addedToCart, setAddedToCart] = useState('');
  const [bigScreen, setBigScreen] = useState(false);

  const saveCart = window.localStorage;

  useEffect(() => {
    if (quantity > 0) {
      setTimeout(addToCart(product, price, quantity), 0);
    }
    return () => {};
  }, [quantity]);

  function addToCart(name, price, pieces) {
    const cart = saveCart.getItem('cart');
    if (cart === null) {
      saveCart.setItem(
        'cart',
        JSON.stringify([{ product: name, cost: price, quantity: pieces }])
      );
      return;
    }

    const tempCart = JSON.parse(cart);
    if (tempCart.length > 0) {
      for (const elem of tempCart) {
        if (elem.product === name) {
          elem.quantity = elem.quantity + pieces;
          saveCart.setItem('cart', JSON.stringify(tempCart));
          return;
        }
      }
    }

    tempCart.push({ product: name, cost: price, quantity: pieces });
    saveCart.setItem('cart', JSON.stringify(tempCart));
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

  const setModifyCart = (value) => {
    setAddedToCart(value);
  };

  const getBigScreen = (value) => {
    setBigScreen(value);
  };

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
        product,
        saveCart,
        setModifyCart,
        addedToCart,
        bigScreen,
        getBigScreen,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export const useCartContexProvider = () => {
  return useContext(CartContext);
};
