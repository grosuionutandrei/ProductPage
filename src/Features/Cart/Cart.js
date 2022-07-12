import React, { useEffect, useState, useRef } from 'react';
import { useCartContexProvider } from '../../Components/GeneralContext/GeneralContext';
import style from './Cart.module.css';
import remove from '../../files/images/icon-delete.svg';
import image from '../../files/images/image-product-1-thumbnail.jpg';

// add event on cart image click

export const Cart = (props) => {
  const { saveCart } = useCartContexProvider();
  const [deleteItem, setDeleteItem] = useState('');
  const [sendOrder, setSendOrder] = useState('');
  const [showCart, setShowCart] = useState(props.handleShowCart);
  const orderContainer = useRef();

  useEffect(() => {
    const cart = saveCart.getItem('cart');
    async function sendOrder() {
      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
          },
          // body: JSON.stringify(cart),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        saveCart.removeItem('cart');
      } catch (e) {
        console.log(e);
      }
    }
    let execute = true;
    if (execute && deleteItem) {
      const cartProducts = getProducts();
      saveCart.setItem(
        'cart',
        JSON.stringify(
          cartProducts.filter((item) => item.product !== deleteItem)
        )
      );
      setDeleteItem(false);
    }

    if (sendOrder) {
      sendOrder();
      setSendOrder(false);
    }

    return () => {
      execute = false;
    };
  }, [deleteItem, sendOrder]);

  function getProducts() {
    const products = saveCart.getItem('cart');
    if (products) {
      return JSON.parse(products);
    }
    return null;
  }

  const deleteFromCart = (event) => {
    setDeleteItem(event.target.dataset.product);
  };

  const totalPrice = (quantity, price) => {
    let priceTemp = 0;
    quantity > 1 ? (priceTemp = quantity * price) : (priceTemp = price);
    return priceTemp;
  };

  const handleOrder = () => {
    setSendOrder(true);
  };

  function quantityShow(quantity, price) {
    if (quantity < 1) {
      return ` `;
    }
    if (quantity === 1) {
      return `${price}$`;
    }
    if (quantity > 1) {
      return `${price} X ${quantity}`;
    }
  }

  const setClass = () => {
    props.setShowCart(false);
    console.log(orderContainer.current);
    if (orderContainer.current.className === 'cart_hide') {
      return 'cart_container';
    }
    return 'cart_hide';
  };

  setClass();

  console.log(props.handleShowCart);

  // controls the cart render (empty and with products)
  const renderCart = () => {
    const cartProducts = getProducts();
    if (cartProducts === null || cartProducts.length === 0) {
      return (
        <article className={style.cart_hide} ref={orderContainer}>
          <p className={style.cart_title}>Cart</p>
          <section className={style.empty_cart}>
            <p>Your cart is empty</p>
          </section>
        </article>
      );
    }
    return getProducts().map((item) => (
      <article
        key={item.product}
        className={showCart ? style.cart_container : style.cart_hide}
        ref={orderContainer}
      >
        <p className={style.cart_title}>Cart</p>
        <section className={style.cart_notEmpty}>
          <img
            src={image}
            alt="product"
            className={style.cart_product__thumbnail}
          />
          <section>
            <p className={style.product_title}>{item.product}</p>
            <p className={style.product_price}>
              {quantityShow(item.quantity, item.cost)}
              {item.quantity > 1 && (
                <span className={style.product_total__price}>{` $${totalPrice(
                  item.quantity,
                  item.cost
                )}`}</span>
              )}
            </p>
          </section>
          <img
            src={remove}
            alt="remove logo"
            data-product={item.product}
            onClick={deleteFromCart}
          />
        </section>
        <button className={style.cart_checkout} onClick={handleOrder}>
          Checkout
        </button>
      </article>
    ));
  };

  return renderCart();
};
