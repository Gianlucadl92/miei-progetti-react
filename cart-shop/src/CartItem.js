import React from "react";
import { useGlobalContext } from "./context";
const CartItem = ({ id, img, title, price, amount }) => {
  const { remove, increase, decrease, toggleAmount } = useGlobalContext();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div className="info-item">
        <h4 className="title">{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => remove(id)}>
          remove
        </button>
      </div>
      <div className="btn-group">
        {/* increase amount */}
        <button className="amount-btn" onClick={() => toggleAmount(id, "inc")}>
          +
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button className="amount-btn" onClick={() => toggleAmount(id, "dec")}>
          -
        </button>
      </div>
    </article>
  );
};

export default CartItem;
