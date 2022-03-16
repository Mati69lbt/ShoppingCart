import React from "react";

const CartItem = ({ data, delFromCart }) => {
  let { id, name, price, quantity } = data;
  return (
    <div style={{ borderBottom: "thin solid gray" }}>
      <h4>{name}</h4>
      <h5>{` $ ${price} x ${quantity} = $ ${price * quantity} mil`}</h5>
      <button onClick={() => delFromCart(id)} style={{ margin: "5px" }}>
        Eliminar uno
      </button>

      <button onClick={() => delFromCart(id, true)}>Eliminar Todos</button>
    </div>
  );
};

export default CartItem;
