import React from 'react';
import { useCartContexProvider } from '../../Components/GeneralContext/GeneralContext';

export const Cart = (props) => {
  const { productImage, quantity, price } = useCartContexProvider();

  const totalPrice = (quantity, price) => {
    let priceTemp = 0;
    quantity > 1 ? (priceTemp = quantity * price) : (priceTemp = price);
    return priceTemp;
  };

  const quantityShow = (quantity, price) => {
    if (quantity < 1) {
      return ` `;
    }
    if (quantity === 1) {
      return `${price}$`;
    }
    if (quantity > 1) {
      return `${price} X ${quantity}`;
    }
  };

  return (
    <article>
      <p>Cart</p>
      <section>
        {quantity >= 1 && (
          <img
            src={productImage}
            alt="product"
            style={{ width: '25px', height: '25px' }}
          />
        )}

        <p>
          {quantityShow(quantity, price)}
          {quantity > 1 && <span>{` $${totalPrice(quantity, price)}`}</span>}
        </p>
      </section>
      <button>Checkout</button>
    </article>
  );
};
