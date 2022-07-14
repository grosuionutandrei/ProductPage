import React, { useState, useRef, useEffect } from 'react';
import style from './Cart.module.css';
import { useCartContexProvider } from '../../Components/GeneralContext/GeneralContext';
import remove from '../../files/images/icon-delete.svg';
import image from '../../files/images/image-product-1-thumbnail.jpg';
export const OrderCart = (props) => {
  const { saveCart } = useCartContexProvider();
  const [sendOrder, setSendOrder] = useState(false);
  const [deleteItem, setDeleteItem] = useState(false);
  const item = useRef();

  useEffect(() => {
    let execute = true;
    if (execute && deleteItem) {
      const cartProducts = getProducts();
      saveCart.setItem(
        'cart',
        JSON.stringify(
          cartProducts.filter((elem) => elem.product !== item.current)
        )
      );
      setDeleteItem(false);
    }

    return () => {
      execute = false;
    };
  }, [deleteItem]);

  const deleteFromCart = (event) => {
    setDeleteItem(true);
    item.current = event.target.dataset.product;
  };

  function getProducts() {
    const products = saveCart.getItem('cart');
    if (products) {
      return JSON.parse(products);
    }
    return null;
  }

  const handleOrder = () => {
    setSendOrder(true);
  };

  async function sendOrders() {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify(cart),   here will be the order products , no server to receive orders yet
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      saveCart.removeItem('cart');
      setSendOrder(false);
    } catch (e) {
      console.log(e);
    }
  }
  if (sendOrder) {
    sendOrders();
  }

  const totalPrice = (quantity, price) => {
    let priceTemp = 0;
    quantity > 1 ? (priceTemp = quantity * price) : (priceTemp = price);
    return priceTemp;
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

  const renderCart = () => {
    const cartProducts = getProducts();

    if (cartProducts === null || cartProducts.length === 0) {
      return (
        <article className={style[props.cartClass()]}>
          <p className={style.cart_title}>Cart</p>
          <section className={style.empty_cart}>
            <p>Your cart is empty</p>
          </section>
        </article>
      );
    }

    const renderProducts = cartProducts.map((item) => (
      <section key={item.product} className={style.cart_notEmpty}>
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
    ));
    const renderOrder = (
      <article className={style[props.cartClass()]}>
        <p className={style.cart_title}>Cart</p>
        <>{renderProducts}</>
        <button className={style.cart_checkout} onClick={handleOrder}>
          Checkout
        </button>
      </article>
    );
    return renderOrder;
  };

  return renderCart();
};
